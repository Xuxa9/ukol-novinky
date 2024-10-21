const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

const classNewElement = document.querySelector(".news")
classNewElement.style.backgroundColor = "white"
classNewElement.style.width = "60rem"

const nadpis = document.querySelector("h1")
nadpis.className = "news__title"
nadpis.textContent = "Aktuální novinky"

const zprava1 = document.querySelector("#zprava1")
zprava1.classList.add("post--main")

document.querySelector("#zprava3 img").src = images/zprava3-novy.jpg 



