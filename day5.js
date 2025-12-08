/*let samp=()=>{
    console.log("Arrow Function");
    return 10;
}
samp();

let add=(a,b)=>{
    return a+b;
}
console.log(add(10,20));*/

//ARRAY:
/*let arr=[10,20,30];
let [a,b,c]=arr;
console.log(a);
console.log(b);
console.log(c);*/

//OBJECT:
/*let arr=["Thamil","CBE"]
let [na,City]=arr;
console.log(na);
console.log(City);*/

//Map
/*let arr={na:"Thamil",City:"CBE"}
let {na,City}=arr;
console.log(na);
console.log(City);*/

/*console.log("Start")
setTimeout(()=>{
    console.log("Wait")
},5000)
console.log("End")*/

/*console.log("Start")
setTimeout(()=>{
    console.log("Wait")
    setTimeout(()=>{
        console.log("End")
    },2000)
},2000)*/

/*console.log("Procss-1")
setTimeout(()=>{
    console.log("Process-2")
    setTimeout(()=>{
        console.log("Process-3")
        setTimeout(()=>{
            console.log("Process-4")
        },2000)
    },2000)
},2000)*/

/*let res=fetch("https://jsonplaceholder.typicode.com/users").then(res=>{
    return res.json()
}).then(user=>{
    console.log(user)
})
console.log(res)*/

let employee=[{ena:"Arun",mob:111},{ena:"Bala",mob:112},{ena:"Dinesh",mob:113},{ena:"Ube",mob:114}]
let newEmp=employee.filter((emp)=>{
    //return emp.mob==112;
     return emp.ena.includes("be");
})
console.log(newEmp)