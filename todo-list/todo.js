// getting all required elements
const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todoList");
const deletAllBtn = document.querySelector(".footer button");


inputBox.onkeyup = () => {
    let userData = inputBox.value;   //  getting user entered value
    if (userData.trim() != 0) { //if user values aren't only spaces
        addBtn.classList.add("active"); //active the add button
    } else {
        addBtn.classList.remove("active");//unactive the add button
    }
}

showTasks(); //calling showTasks function

//if user click on the add button
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo")
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    if (listArr.length > 0) {
        deletAllBtn.classList.add("active");
    } else {
        deletAllBtn.classList.remove("active");
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick ="deletTask(${index})"><i class ="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}


function deletTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

deletAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr))
    showTasks();
}