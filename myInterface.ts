interface customerUser {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: ()=> string
    startTrail(): string
    getCoupon(couponname: string, value: number): number 
}
// reopening of the interface
interface customerUser {
    githubToken?: string
}
interface SuperAdmin extends customerUser{
    role: "admin" | "ta" | "learner"
}


const akash: customerUser = {
    dbId: 4646,
    githubToken: "akash@github.com",
    email: "bagakash@gmail.com",
    userId: 4748,
    
    startTrail: ()=>{
        return "trail started!"
    },
    getCoupon(couponname: "code10", value: 10) {
        return value
    },
}
const somi: SuperAdmin = {
    dbId: 4646,
    githubToken: "akash@github.com",
    email: "bagakash@gmail.com",
    userId: 4748,
    role: "admin",
    startTrail: ()=>{
        return "trail started!"
    },
    getCoupon(couponname: "code10", value: 10) {
        return value
    },
}

console.log(akash.email)