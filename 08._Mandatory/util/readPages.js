import { readPage, renderPage } from "./templateEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html")
export const homepagePage = renderPage(homepage, {
    tabTitle: "Portofolio Homepage"
})

const week1 = readPage("./public/pages/weeklyModules/week1.html")
export const week1Page= renderPage(week1, {
    tabTitle: "Uge 1"
})