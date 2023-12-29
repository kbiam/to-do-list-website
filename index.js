const inputBox = document.getElementById('inputbox');
const taskcontainer = document.getElementById('taskcontainer');

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        taskcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputBox.value=null;
    saveData();


}
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
}
);

taskcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        greet();
        saveData();
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskcontainer.innerHTML);
}
 
function getData(){
    taskcontainer.innerHTML=localStorage.getItem("data");
}

getData();

function greet(){
    const allTasks = taskcontainer.querySelectorAll("li");
    const allChecked = Array.from(allTasks).every(task => task.classList.contains("checked"));

    if (allChecked) {
        alert("Congratulations! You completed all your tasks");
    }
}
