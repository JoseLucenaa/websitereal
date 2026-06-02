const fs = require('fs');
async function test() {
    try {
        const response = await fetch("https://www2.ifal.edu.br/campus/maceio/noticias/noticias/rss.xml", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
            }
        });
        console.log("Status:", response.status);
        const text = await response.text();
        console.log(text.substring(0, 100));
    } catch(e) {
        console.error("Error:", e);
    }
}
test();
