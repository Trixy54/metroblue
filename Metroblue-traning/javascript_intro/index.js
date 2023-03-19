// const x=40;
 
// if(x==10){
//     console.log('x is 10');
// }else if(x>10){
//  console.log('x is greater than 10')
// }else{
//     console.log('x is less than 10')
// }
// const x=6;
// const y=12;
 
// if( 'x>5 && y>10'){
//     console.log( 'if x is more than 5 and y is more than 10');
// }

// const x=10;

// const color= x>10 ? 'red' :'blue';
// // console.log(color);
// switch(color){
//     case 'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//     default:
//     console.log('color is not red or blue');
//     break;
// }


// const x=9;
// const color= x>10 ? 'red' :'blue';
// // console.log(color);
// switch(color){
//     case 'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//     default:
//     console.log('color is not red or blue');
//     break;
// }

// const x=9;
// const color= 'green';
// // console.log(color);
// switch(color){
//     case 'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//     default:
//     console.log('color is not red or blue');
//     break;
// }

// function addNums(nums1,nums2){
//     console.log(nums1+nums2);
// }
// addNums(45,69);

// function addNums(nums1=25,nums2=58){
//     return(nums1+nums2);
// }
// console.log(addNums(45,69));
const addNums=(nums1=25,nums2=58) =>{
    return(nums1+nums2);
}
console.log(addNums(45,69));
  
// // construtive function
// function Person( firstName,lastName,dob){
//     this.firstName= firstName;
//     this.lastName= lastName;
//     this.dob= new Date(dob);
//     // this.getBirthYear=function(){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName=function(){
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
//     Person.prototype.getBirthYear= function(){
//         return this.dob.getFullYear();
//     }
//     Person.prototype.getFullName= function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
    // class
    class Person{
        constructor( firstName,lastName,dob){
             this.firstName= firstName;
             this.lastName= lastName;
             this.dob= new Date(dob);
        }
        getBirthYear(){
             return this.dob.getFullYear();
        }
        getFullName(){
              return `${this.firstName} ${this.lastName}`;
        }
    }

// initiate objective
const person1= new Person('MICHEAL','MYERS','05-25-1963');
const person2= new Person('DENNIS','COLES','05-09-1973');
// console.log (person1.getBirthYear());
// console.log (person1.getFullName());
console.log(person2.getFullName());
console.log(person1);