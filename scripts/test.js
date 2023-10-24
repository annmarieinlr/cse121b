function test(articleNumber) {
    switch (articleNumber) {
        case "1": // Ensure the comparison is a string
            const article = JSON.parse(articleList);
            const string = article.articles[0].content;
            document.getElementById(articleNumber).innerHTML = string;
            break;
        default:
            break;
    }
}


//export default test.js; 