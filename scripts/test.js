/* async getArticles Function using fetch()*/

const getArticles = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above
    const response = await fetch("articles-of-faith.json");
    let articleList = await response.json();
    console.log(articleList);
    return articleList;
}


async function test(articleNumber, userAnswer) {
    const articles = await getArticles();
    console.log(articles)

    if (userAnswer === articles.articles[articleNumber - 1].content){
        alert("congrats! 🥳");
    }
    else {
        alert("keep trying 🤔");
    };

    location.reload();
}


export default test; 