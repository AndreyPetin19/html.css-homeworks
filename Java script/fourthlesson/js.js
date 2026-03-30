// let colors = ["red" , "blue"]
// colors.push("green")

// console.log(colors)




// let cart = ["milk" , "bread"]
// cart.push("eggs")
// cart.pop()
// cart.unshift("carrot")
// console.log(cart.indexOf("milk"))
// console.log(cart.includes("milk"))
// console.log(cart)





// let words = ["hello" , "world"]
// console.log(words.join("-"))





// let nums = [10, 20, 30, 40, 50, 60]
// let part = nums.slice(1, 4) slice(start, end)
// console.log(part)
// console.log(nums)





// let fruits = ["apple", "banana", "orange"]
// fruits.splice(1,1,"kiwi", "mango")
// console.log(fruits)




// let fruits = ["apple", "banana", "orange"]
// fruits.splice(0,2,1,"grape", "strawberry")
// console.log(fruits)





// let arr1 = [1,2]
// let arr2 = [2,3]
// let result = arr1.concat(arr1)
// console.log(result)




// let numbers = [1,2,3]
// numbers.reverse()
// console.log(numbers)




// let fruits = ["banana","apple", "orange"]
// fruits.sort()
// console.log(nums)




// let nums = [100,1,9,21,34,3]
// nums.sort((a, b) => a - b)
// console.log(nums)




// ========================МЕТОДЫ ПЕРЕБОРА МАССИВОВ========================



// let nums = [1,2,3]
// nums.forEach(num => {
//     console.log(num)
// })



// let nums = [1,2,3,4,5]
// let doubled = nums.map(num => num*2)
// console.log(doubled)



// let products = [
//     {title: "phone", price: 350000},
//     {title: "laptop", price: 550000},
//     {title: "mouse", price: 20000},
// ]
// console.log(products)
// let cards = products.map(product => {
//     return `${product.title} - ${product.price} тг`
// })
// console.log(cards)





// let nums = [10,20,30,40]
// let sum = nums.reduce((acc, num) => {
//     return acc + num
// }, 0)
// console.log(sum)

 



let cart = [
    {title: "phone", price: 350000},
    {title: "laptop", price: 550000},
    {title: "mouse", price: 20000},
]

let total = cart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(total) 