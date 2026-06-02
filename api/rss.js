export default async function handler(req, res) {
    try {
        const response = await fetch("https://www2.ifal.edu.br/campus/maceio/noticias/noticias/rss.xml");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        
        // Retornar como XML e permitir cache pela Vercel
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate'); // Cache Edge de 10 min
        
        res.status(200).send(text);
    } catch (error) {
        console.error("Erro na API de RSS:", error);
        res.status(500).json({ error: 'Failed to fetch RSS' });
    }
}
