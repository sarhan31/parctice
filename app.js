/*const student= {
    fullname:"sarhan", 
    age: 20,
    class: 12,
    marks: 90,
    totalmarks : () =>{
        console.log("total marks:",this.marks);
    }
}
const computerenge ={
   salary:500000,
    }

computerenge.__proto__=student;*/


/*class car {
    constructor(brand,speed){
        console.log("car created");
        this.brand=brand;
        this.speed=speed;
    }
    function(start){
        console.log("car started");
    }
              function= (stop)=>{
        console.log("car stopped");
    }
}

let fortuner = new car("toyota","180");*/


/*class car {
    constructor(brand,price,milage){
        console.log("car created");
        this.brand=brand;
        this.price=price;
        this.milage= milage;
    }
    function= (start)=>{
        console.log("car started");
    } 
    function= (stop) =>{
        console.log("car stopped");
        
    }
}
class toyotafortuner extends car{
    constructor(){
        super();
        console.log("fortuner created");
    }
    brand="toyota";
    price=1000000;
    milage=10;
    
}
class toyotalexus extends car{
    
    brand="toyota";
    price=1500000;
    milage=20;
}
let fortuner = new car("toyota","1000000","10");
let lexus = new toyotalexus("toyota","1500000","20");*/

/*let DATA="sarhan";
class user {
    constructor(name,email){
        this.name=name;
        this.email=email;}
        ViewData (){
    console.log("the data is :",DATA);
}
    
}
let user1=new user("sarhan","sarhan@111");
let user2 =new user ("salluu","salluu@111");*/


//promise chianing//
/*function pro (){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1 fetched");
            resolve("resolved");
        },5000)
    })
}
function pro2 (){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2 fetched");
            resolve("resolved");
        },5000)
    })
}
function pro3 (){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data3 fetched");
            resolve("resolved");
        },5000)
    })
}
console.log("fetching data1");
pro().then((res)=>{
    console.log("fetching data2");
    return pro2();
    console.log(res);
    
  

}).then((res)=>{
    console.log("fetching data3");
    return pro3();
    console.log(res);
})*/



//async await//
/*async function sallu() {
    console.log("sallu bhai");
    
}*/

//await//

/*function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data fetched");
            resolve("resolved");
        },5000)
    })
}
(async function () {
await api();
})();*/


const url="https://api.thecatapi.com/v1/images/searchs";
const getfact = async ()=>{
    console.log("fetching data ....");
    let response=await fetch(url);
    console.log(response);
}