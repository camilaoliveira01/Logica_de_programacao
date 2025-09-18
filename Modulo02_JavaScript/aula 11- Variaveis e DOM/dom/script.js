let paragrafo1 = document.getElementsByTagName("p")[0]
paragrafo1.innerHTML = "USANDO TAG NAME"
paragrafo1.style.backgroundColor = "red"

let paragrafo2 = document.getElementsById("paragrafo2")
paragrafo2.innerHTML = "USANDO O ID"
paragrafo2.style.backgroundColor = "green"

let paragrafo3 = document.getElementsByClassName("paragrafo3")[0]
paragrafo3.innerHTML = "USANDO A CLASSE"
paragrafo3.style.backgroundColor = "blue"

let paragrafo4 = document.querySelector("p") [3]
paragrafo4.innerHTML = "USANDO QUERY SELECTOR"
paragrafo4.style.backgroundColor = "pink"

let paragrafo5 = document.querySelectorAll("p")[0]
paragrafo5.innerHTML = "USANDO QUERY SELECTOR ALL"
paragrafo5.style.backgroundColor = "purple"