const fs = require('fs');
async function test() {
    try {
        const rssUrl = "https://www2.ifal.edu.br/campus/maceio/noticias/noticias/rss.xml";
        const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(rssUrl);
        const response = await fetch(proxyUrl);
        const text = await response.text();
        console.log(text.substring(0, 200));
    } catch(e) {
        console.error("Error:", e);
    }
}
test();
