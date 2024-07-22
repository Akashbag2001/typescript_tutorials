// Union
let score: number | string = 33

score = "56"

type customer = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}

let hitesh: customer | Admin = {
    name: "Akash",
    id: 887
}

hitesh =  {
    username: "ab",
    id: 887
}

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is : ${id}`)

// }
function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    if(typeof id === "number"){
        console.log(id + 2)
    }
}

getDbId(3)
getDbId("5")
//array 
const data: number[] = [1,2,3]
const data2: string[] = ["2","5","6"]
const data3: (string | number | boolean)[] = ["1",5,true,6,"d"]

let seatAllotment: "aisle" | "middle" | "window"
// seatAllotment = "crew"

