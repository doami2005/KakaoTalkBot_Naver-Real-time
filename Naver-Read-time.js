/*

Made by doami2005
카카오톡 봇 네이버 실시간 검색어 소스입니다.
메신저봇R 전용입니다.

https://open.kakao.com/o/gXaUzu1b
질문은 여기로

*/

const Jsoup = org.jsoup.Jsoup;

function response (room, msg, sender, igc, replier) {
    if (msg == "/실검") {
        let parse = Jsoup.connect("http://m.search.naver.com/search.naver?query=실검").get();
        let query = parse.select("span[class^=tit _]").toArray();
        let result = query.map((e, i) => ++i+"위 | "+e.text()).join("\n");
        replier.reply(result);
    }
}
