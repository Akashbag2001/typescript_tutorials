// const User = {
//     name: "Akash",
//     email: "bagakash11@gmail.com",
//     isActivate: true
// }

// // function createUser({name: string, isPaid: boolean}){

// // }

// let newUser = {name: "Akash", isPaid: false, email: "bagakash11@gmail.com"}

// // createUser(newUser)

// function createCourse(): {name: string , price: number}{
//     return {name: "reactjs", price: 399}
// }

// //alias

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email:"", isActive:true}
// }

// createUser({name:"Akash", email:"bagakash11@gmail.com", isActive: true})

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credcardDetails ?: number 
}

let myUser: User  = {
    _id:"1234",
    name: "Asksh",
    email: "bagakash11@gmail.com",
    isActive: false,
    // credcardDetails: 1322432555
}
type cardnumber = {
    cardNumber : string
}

type carddate = {
    cardDate : string
}

type carddetails = carddate & cardnumber & {
    cvv : number
}


let userCardDetails: carddetails ={
    cardNumber: "321323",
    cardDate: "132133",
    cvv: 1221
}



export{}