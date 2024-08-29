// let age = 3;

// let result = age > 18 ? console.log("Valid") : console.log("Not Valid");

// let sayHallo = () => {
//     console.log("Hallo");
// }

// sayHallo();

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// arr.forEach((ele) => console.log(ele));

// for(let ele of arr) console.log(ele);

// let obj = {
//     name: "ali",
//     age:29
// }
// for(let ele of obj) console.log(obj);
let arr = [1,2,3];
// hallo
let newArr = [];
for(let ele of arr) {
    newArr.push(ele+1);
}
console.log(arr.find(ele => ele > 20));
console.log(arr.reduce((amount , ele) => {
   return amount += ele;

},0));

