const axios = require("axios").default;
const cheerio = require("cheerio");
const fs = require("fs");

axios.get("https://www.moneycontrol.com/markets/indian-indices/").then(function(html){
    fs.writeFileSync("test.html", html.data, "utf-8");
    handlehtml(html.data);
}).catch(function(error){
    console.log("Error Encountered!!!");
    console.error(error);
})

function handlehtml(html){
    let $ = cheerio.load(html);
    let content = $(".clearfix.inditablecnt");
    fs.writeFileSync("test2.html", $(content).html());
    console.log("Done");
}