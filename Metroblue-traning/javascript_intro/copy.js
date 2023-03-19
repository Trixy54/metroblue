// Single element selector
// const form=document.getElementById('my-form');
// console.log (form);
// console.log (document.querySelector('h1'));

// Multiple element selector
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

//  for looping use for each
// const items = document.querySelectorAll('.item')
// items .forEach((item)=> console.log(item));


// const ul = document.querySelector('.items')
// // ul. remove();
// // ul.lastElementChild.remove();
// ul. firstElementChild.textContent='MICHEAL MYERS';
// ul.children[1].innerText='MORRIS JOHNSON';
// ul.lastElementChild.innerHTML= '<h1>DENNIS COLE</h1>';


// const btn =document.querySelector('.btn')
// btn.style.background='purple'


// const btn =document.querySelector('.btn')
// btn.addEventListener('click',(e) =>{
//     e.preventDefault();
// // console.log(e.target.className);
// document.querySelector('#my-form')
// .style.background= '#E0CEDF';
// document.querySelector('.item')
// .lastElementChild.innerHTML='<h1>HUGH JACKMAN</h1>';
// })

const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userlist=document.querySelector('.users')

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
   e.preventDefalut()
//    console.log(nameInput.value)

if(nameInput.value===''|| emailInput.value===''){
    // alert('PLEASE ENTER FILLEDS');
    msg.classList.add('error')
   msg.innerHTML='Please enter all fields';
   setTimeout(()=> msg.remove(),3000);

}else{
    // console.log(success)
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

    userlist.appendChild(li);

    nameInput.value='';
    emailInput.value='';
}
}