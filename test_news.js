const fs = require('fs');
async function test() {
    try {
        const rssUrl = "https://www2.ifal.edu.br/campus/maceio/noticias/noticias/rss.xml";
        const proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(rssUrl);
        const response = await fetch(proxyUrl);
        const text = await response.text();
        console.log(text);
    } catch(e) {
        console.error("Error:", e);
    }
}
test();
