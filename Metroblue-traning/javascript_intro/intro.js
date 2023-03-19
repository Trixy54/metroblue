// console.log('Hello World')
// console.error( 'This is an error')
// console.warn('this is a warning')
// console.clear('')
 
const name='john';
const age=30;
//Tamplate Strings
const hello =`MY Name is ${name} and i am ${age}years old`;

console.log(hello);

const t='technology,computer, it,code';
// const t ='TRIXY COLLECTION'; 
// console.log(t.toLocaleLowerCase())
//  console.log(t.substring(0,14))
console.log(t.split(','))
 
const number= new Array(1,2,3,4,5)
console.log(number)

const fruits=['apple','mangos','watermelons'];
fruits[3]='grapes';
fruits.push('blueberries');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('watermelons'));
console.log(fruits);


const person={
    firstName:'MICHAEL',
    lastName:'MYERS',
    age:30,
    hobbie:['music','movies','art'],
    address:{
        street:'50,daliyentrance st',
        city:'HOUGANG',
        state:'singapore' 
    }
}
person.email='myers777@gmail.com';
console.log(person)

const todolist=[
    { 
        id:1,
        text:'do poject assigment',
        isCompleted:false
    },

        { 
            id:2,
            text:'pick out an outfit in my head',
            isCompleted:true
        },
        
            { 
                id:3,
                text:'wake up on time',
                isCompleted:false
            }
        
]

// const  todolistJSON=JSON.stringify(todolist);
// console.log(todolistJSON);

// for(let i=0;i<=10; i++){
//     console.log('For Loop Number:${i}');
// }
// let i=0;
// while(i<=10){
//     console.log('For Loop Number:${i}');
//     i++ 
// }

// for(let bucket of todolist){
//     console.log(bucket.text);
// }
//  forEach,map,filter
// todolist.forEach(function(bucket){
//     console.log(bucket.text);
// });
// const bucketText=todolist.map(function(bucket){
//  return bucket.text
// });
// console.log(bucketText);

const bucketCompleted=todolist.filter(function(bucket){
    return bucket.isCompleted ===false;
   }) .map(function(bucket){
    return bucket.text;
   })
   console.log(bucketCompleted);