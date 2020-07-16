const Jsoup = org.jsoup.Jsoup;

function response (room, msg, sender, igc, replier) {
    if (msg == "/실검") {
        let parse = Jsoup.connect("http://m.search.naver.com/search.naver?query=실검").get();
        let query = parse.select("span[class^=tit _]").toArray();
        let result = query.map((e, i) => ++i+"위 | "+e.text()).join("\n");
        replier.reply(result);
    }
}
