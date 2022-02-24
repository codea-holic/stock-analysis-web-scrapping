const axios = require("axios").default;
const cheerio = require("cheerio");
const fs = require("fs");
const process = require("process");
const args = process.argv;
const url = "https://www.moneycontrol.com";
axios.get("https://www.moneycontrol.com/markets/indian-indices/").then(function(html){
    // fs.writeFileSync("test.html", html.data, "utf-8");
    handlehtml(html.data);
}).catch(function(error){
    console.log("Error Encountered!!!");
    console.error(error);
})

function handlehtml(html){
    let $ = cheerio.load(html);
    let content = $(".clearfix.inditablecnt");
    let ele = $(content).find(".ntlist");
    fs.writeFileSync("test2.html", $(ele).html(), "utf-8");
    const selector =`li[data-name="${args[2]}"] > h2 > a`
    let hrefValue = $(ele).find(selector).attr('href');
    handlehref(hrefValue);
}

function handlehref(href){
    //TODO: need to fetch data from the given url;
}