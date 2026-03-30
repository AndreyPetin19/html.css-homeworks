// let i = 1
// while(i <= 5){
//     console.log(i)
//     i++
// }


// let i = 5
// while(i >= 1){
//     console.log(i)
//     i--
// }


// let i = 2
// while(i <= 20){
//     console.log(i)
//     i += 2
// }


// let i = 1
// while ( i <=5){
//     sum += i
//     i ++
// }
// console.log(sum)



// let input = ""
// while(input !== "exit"){
//     input = promt("введите exit для выхода")
// }


// let number = number(prompt("введите больше 10: "))
// while(number <= 10){
//     number = Number(prompt("ошибка введите снова: "))
// }



// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }



// for(let i = 1; i <= 5; i--){
//     console.log(i)
// }



// for(let i = 1; i <= 20; i++){
//     console.log(i)
// }



// let i = 1
// do{
//     console.log(i)
//     i++
// }
// while (i <= 5)


// let choise
// do{
//     choise = prompt("1 - ПРИВЕТ, 2 - ВЫХОД")
//     if(choise === "1"){
//         console.log("ПРИВЕТ")
// }
// }
// while(choise !== "2")



// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; i++){
//         console.log(i,j)
//     }
// }


// for(let i = 1; i <= 3; i++){
//     let row = ""

//     for(let j = 1; j <= 3; j++){
//         row += "* "
//     }
//      console.log(row)   
// }



// for (let i =1; i<= 5; i++){
//     let row = ""
//     for (let j = 1; j <= i; j++){
//         row += "*"
//     }
//     console.log(row)
// }

        

// for(let i = 0; i < 8; i++){
//     let row = ""
//     for (let j = 0; j < 8; j++){
//         if((i + j) % 2 === 0){
//             row += "⬛"
//         }
//         else{
//             row += "⬜"
//         }
//     }
//     console.log(row)
// }


// let i = 1
// while(i <= 10){
//    if (i % 2 !== 0){
//     console.log(i)
//    }
//    i++
// }



// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }



// let choice;

// do {
//     choice = Number(prompt("0 - выход\.1 - профиль\.2 - игра"));

//     if (choice === 1) {
//         console.log("Открыт профиль");
//     } else if (choice === 2) {
//         console.log("Запущена игра");
//     }

// } while (choice !== 0);

// console.log("Выход из программы");


for (let i = 1; i <= 5; i++) {
    let row = "";

   
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }

   
    for (let k = 1; k <= i; k++) {
        row += "*";
    }

    console.log(row);
}