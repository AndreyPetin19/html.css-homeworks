const loadbtn = document.getElementById("loadbtn")
const productsBlock = document.getElementById("products")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")



searchBtn.addEventListener("click", searchProducts)

async function searchProducts (){
    const query = searchInput.value.trim()

    if(query === ""){
        productsBlock.innerHTML = `<p>введите название товара</p>`
        return
    }

    try {
        productsBlock.innerHTML = `<p>поиск...</p>`

        const responce = await fetch(`https://dummyjson.com/products/search?q=${query}`)

        if(!responce.ok){
            throw new Error("ошибка поиска")
        }

        const data = await responce.json()

        if(data.products.length === 0){
            productsBlock.innerHTML = `<p>ничего не найдено</p>`
            return
        }

        renderproducts(data.products)

    } catch(error){
        productsBlock.innerHTML = `<p>${error.message}</p>`
    }
}





loadbtn.addEventListener("click", loadproduct)

async function loadproduct() {
    try {
        productsBlock.innerHTML = `<p>загрузка товаров</p>`

        const responce = await fetch("https://dummyjson.com/products")

        if (!responce.ok){
            throw new Error("не удается загрузить товары")
        }

        const data = await responce.json()

        data.products.forEach((product) => {
            renderproducts(data.products)
        })

    } catch(error){
        productsBlock.innerHTML = `<p> ошибка: ${error.message}</p>`
    }
}

function renderproducts(products){
    
    productsBlock.innerHTML = ""

    products.forEach((product) => {
        productsBlock.innerHTML += `
        <div>
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" width="150">
            <p>${product.description}</p>
            <p>цена: ${product.price}</p>
        </div>
        `
    })
}