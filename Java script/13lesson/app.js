const API_URL = "https://dummyjson.com"

const loginScreen = document.getElementById("loginScreen")
const profileScreen = document.getElementById("profileScreen")
const productsScreen = document.getElementById("productsScreen")
const detailScreen = document.getElementById("detailScreen")

const loginForm = document.getElementById("loginForm")
const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
const loginMessage = document.getElementById("loginMessage")

const profileBlock = document.getElementById("profileBlock")
const goToProductsBtn = document.getElementById("goToProductsBtn")
const logoutBtn = document.getElementById("logoutBtn")

const productsBlock = document.getElementById("productsBlock")
const backtoProfileBtn = document.getElementById("backtoProfileBtn")

const detailScreenBlock = document.getElementById("productDetailBlock")
const backToProductsBtn = document.getElementById("backToProductsBtn")

function showScreen(screen) {
    loginScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    productsScreen.classList.add("hidden")
    detailScreen.classList.add("hidden")

    if (screen === "login") {
        loginScreen.classList.remove("hidden")
    }

    if (screen === "profile") {
        profileScreen.classList.remove("hidden")
    }

    if (screen === "products") {
        productsScreen.classList.remove("hidden")
    }

    if (screen === "detail") {
        detailScreen.classList.remove("hidden")
    }
}

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault()

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    if (username === "" || password === "") {
        loginMessage.textContent = "Введите username и password"
        return
    }

    try {
        loginMessage.textContent = "Загрузка..."

        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if (!response.ok) {
            throw new Error("Неверный логин или пароль")
        }

        const data = await response.json()

        localStorage.setItem("accessToken", data.accessToken)

        loginMessage.textContent = ""

        await loadProfile()
    } catch (error) {
        loginMessage.textContent = error.message
    }
})

async function loadProfile() {
    try {
        const token = localStorage.getItem("accessToken")

        if (!token) {
            showScreen("login")
            return
        }

        profileBlock.innerHTML = "<p>Загрузка профиля...</p>"

        const response = await fetch(`${API_URL}/auth/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error("Не удалось загрузить профиль")
        }

        const user = await response.json()

        profileBlock.innerHTML = `
            <img src="${user.image}" alt="${user.firstName}">
            <div>
                <h2>${user.firstName} ${user.lastName}</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Телефон:</strong> ${user.phone}</p>
                <p><strong>Пол:</strong> ${user.gender}</p>
            </div>
        `

        showScreen("profile")
    } catch (error) {
        localStorage.removeItem("accessToken")
        profileBlock.innerHTML = ""
        loginMessage.textContent = "Сессия истекла. Войдите снова."
        showScreen("login")
    }
}

goToProductsBtn.addEventListener("click", async function () {
    const token = localStorage.getItem("accessToken")

    if (!token) {
        showScreen("login")
        return
    }

    showScreen("products")
    await loadProducts()
})

async function loadProducts() {
    try {
        productsBlock.innerHTML = "<p>Загрузка товаров...</p>"

        const response = await fetch(`${API_URL}/products`)

        if (!response.ok) {
            throw new Error("Ошибка загрузки товаров")
        }

        const data = await response.json()

        productsBlock.innerHTML = data.products.map(function (product) {
            return `
                <div class="product-card">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p><strong>Цена:</strong> $${product.price}</p>
                    <p><strong>Рейтинг:</strong> ${product.rating}</p>
                    <button class="detail-btn" data-id="${product.id}">Подробнее</button>
                </div>
            `
        }).join("")
    } catch (error) {
        productsBlock.innerHTML = "<p>Не удалось загрузить товары</p>"
    }
}

productsBlock.addEventListener("click", async function (event) {
    if (event.target.classList.contains("detail-btn")) {
        const productId = event.target.dataset.id
        await loadProductDetail(productId)
    }
})

async function loadProductDetail(id) {
    try {
        const token = localStorage.getItem("accessToken")

        if (!token) {
            showScreen("login")
            return
        }

        showScreen("detail")
        detailScreenBlock.innerHTML = "<p>Загрузка товара...</p>"

        const response = await fetch(`${API_URL}/products/${id}`)

        if (!response.ok) {
            throw new Error("Ошибка загрузки товара")
        }

        const product = await response.json()

        detailScreenBlock.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p><strong>Категория:</strong> ${product.category}</p>
            <p><strong>Бренд:</strong> ${product.brand}</p>
            <p><strong>Цена:</strong> $${product.price}</p>
            <p><strong>Скидка:</strong> ${product.discountPercentage}%</p>
            <p><strong>Рейтинг:</strong> ${product.rating}</p>
            <p><strong>На складе:</strong> ${product.stock}</p>
        `
    } catch (error) {
        detailScreenBlock.innerHTML = "<p>Не удалось загрузить товар</p>"
    }
}

backtoProfileBtn.addEventListener("click", function () {
    showScreen("profile")
})

backToProductsBtn.addEventListener("click", function () {
    showScreen("products")
})

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("accessToken")

    usernameInput.value = ""
    passwordInput.value = ""
    loginMessage.textContent = ""
    profileBlock.innerHTML = ""
    productsBlock.innerHTML = ""
    detailScreenBlock.innerHTML = ""

    showScreen("login")
})

window.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("accessToken")

    if (token) {
        loadProfile()
    } else {
        showScreen("login")
    }
})