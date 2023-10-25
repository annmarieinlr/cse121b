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

    // switch (articleNumber) {
    //     case "1": // Ensure the comparison is a string
    //         // Get the text input
             
    //         //compare with json content
    //         if (userAnswer === articles.articles[articleNumber - 1].content){
    //             alert("congrats! 🥳");
    //         }
    //         else {
    //             alert("keep trying 🤔");
    //         };
            
    //         break;

    //     case "2":
    //         //compare with json content
    //         if (userAnswer === articles.articles[articleNumber - 1].content){
    //             alert("congrats! 🥳");
    //         }
    //         else {
    //             alert("keep trying 🤔");
    //         };
    //         break;

    //     case "3":
    //         break;
    //     case "4":
    //         break;
    //     case "5":
    //         break;
    //     case "6":
    //         break;
    //     case "7":
    //         break;
    //     case "8":
    //         break;
    //     case "9":
    //         break;
    //     case "10":
    //         break;
    //     case "11":
    //         break;
    //     case "12":
    //         break;
    //     case "13":
    //         break;
                                                                                                                                                   

    //     default:
    //         break;
    // }
    location.reload();
}


export default test; 