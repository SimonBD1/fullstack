import { readPage, renderPage } from "./templateEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html")
export const homepagePage = renderPage(homepage, {
    tabTitle: "Portofolio Homepage"
})

const week1 = readPage("./public/pages/weeklyModules/week1.html")
export const week1Page= renderPage(week1, {
    tabTitle: "Uge 1"
})

const week2 = readPage("./public/pages/weeklyModules/week2.html")
export const week2Page= renderPage(week2, {
    tabTitle: "Uge 2"
})

const week3 = readPage("./public/pages/weeklyModules/week3.html")
export const week3Page= renderPage(week3, {
    tabTitle: "Uge 3"
})

const week4 = readPage("./public/pages/weeklyModules/week4.html")
export const week4Page= renderPage(week4, {
    tabTitle: "Uge 4"
})

const week5 = readPage("./public/pages/weeklyModules/week5.html")
export const week5Page= renderPage(week5, {
    tabTitle: "Uge 5"
})

const week6 = readPage("./public/pages/weeklyModules/week6.html")
export const week6Page= renderPage(week6, {
    tabTitle: "Uge 6"
})

const week7 = readPage("./public/pages/weeklyModules/week7.html")
export const week7Page= renderPage(week7, {
    tabTitle: "Uge 7"
})

const week8 = readPage("./public/pages/weeklyModules/week8.html")
export const week8Page= renderPage(week8, {
    tabTitle: "Uge 8"
})

