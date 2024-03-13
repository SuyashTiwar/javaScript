// this ...
const user={
    name:"Suyash...",
    wel :function(){
        console.log(`${this.name},welcome`)
    }
}
user.wel();
user.name="Samu";
user.wel();

// arrow

 const add=(n1,n2) =>(n1+n2)
 console.log(add(2,2))

const add1=(n1,n2) =>{ return n1+n2}
console.log(add1(2,2))
