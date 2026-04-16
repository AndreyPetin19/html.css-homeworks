// console.log(document)
// console.log(document.body)
// console.log(document.title)

// 1
// const Text = document.getElementsByClassName("text")
// console.log(texts)


// 2
// getElementbyId


// 3
// const paras = document.getElementsByTagName("p")
// console.log(paras)


// 4
// const sub = document.querySelector(".subtitle")
// console.log(sub)


// 5
// const allTexts = document.querySelectorAll(".text")
// console.log(allTexts)


// const photo = document.getElementById("photo")
// const link = document.getElementById("link")

// console.log(photo.getAttribute("src"))
// photo.setAttribute("src", "https://images.freeimages.com/images/premium/previews/5607/56072006-the-himalayas.jpg?fmt=webp&w=350")
// photo.setAttribute("alt", "pixel")

// console.log(link.getAttribute("href"))
// link.setAttribute("href", "https://www.pexels.com/ru-ru/")
// link.textContent = "pixel"


// const message = document.getElementById("message")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     message.classList.add("active")
// })


// const title = document.getElementById("title")
// const changeBtn = document.getElementById("btn")

// changeBtn.addEventListener("click", () => {
//     title.textContent = "new text"
// })


// const countEl = document.getElementById("count")
// const plusBtn = document.getElementById("plus")
// const minusBtn = document.getElementById("minus")

// let count = 0

// plusBtn.addEventListener("click", () => {
//     count++
//     countEl.textContent = count
// })

// plusBtn.addEventListener("click", () => {
//     count--
//     countEl.textContent = count
// })



// const password = document.getElementById("password")
// const toggle = document.getElementById("togglePass")

// toggle.addEventListener("click", => {
//     if(password.type == "password"){
//         password.type == text 
//     }
// })

const card = document.getElementById('card');

document.getElementById("red").addEventListener('click', () => {
  card.style.backgroundColor = "red";
});

document.getElementById("green").addEventListener('click', () => {
  card.style.backgroundColor = "green";
});

document.getElementById("white").addEventListener('click', () => {
  card.style.backgroundColor = "white";
});