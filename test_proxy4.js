const fs = require('fs');
async function test() {
    try {
        const rssUrl = "https://www2.ifal.edu.br/campus/maceio/noticias/noticias/rss.xml";
        const response = await fetch(rssUrl);
        const text = await response.text();
        console.log(text.substring(0, 200));
    } catch(e) {
        console.error("Error:", e);
    }
}
test();
