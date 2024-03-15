import fs from "fs";

export function readPage (path){
    return fs.readFileSync(path).toString();
}

const value = true;

console.log(value || "some other value"); //
console.log(value && "some other value"); //vil ikke retunere 0 og empty strings,  tager falsy valyes og coercer dem

const header = fs.readFileSync("./public/components/header/header.html".toString())
const footer = fs.readFileSync("./public/components/footer/footer.html".toString())

export function renderPage(page, config={}){
    const header = fs.readFileSync("./public/components/header/header.html").toString()
    return header.replace("$TAB-TITLE$", config.tabTitle ?? "DogInder")
     + page 
     + footer
}