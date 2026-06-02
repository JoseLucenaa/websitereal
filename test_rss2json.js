const fs = require('fs');
async function test() {
    try {
        const rssUrl = "https://www2.ifal.edu.br/campus/maceio/noticias/noticias/rss.xml";
        const proxyUrl = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl);
        const response = await fetch(proxyUrl);
        const json = await response.json();
        console.log(JSON.stringify(json.items[0], null, 2));
    } catch(e) {
        console.error("Error:", e);
    }
}
test();
