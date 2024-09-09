
let input=document.getElementById("todo-input")




let taskArray = [];
if(localStorage.tasks)
{
    taskArray=JSON.parse(localStorage.tasks);
//     taskArray.forEach(function(element)
// {
//     addtoDo(element)
// });

    for(i = 0; i<taskArray.length; i++)
        addtoDo(taskArray[i]) 
}

function addtoDo(inputText){
    let list=document.getElementById("todo-list")
    if(inputText){
        let todoIteam=document.createElement("li")
        let checkbox=document.createElement("INPUT")
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML="Delete"
        deleteBtn.onclick= function()
        {
            for(i = 0; i<taskArray.length; i++)
            {
                if(inputText==taskArray[i])
                {
                    taskArray.splice(i,1);
                }
            }
            localStorage.tasks=JSON.stringify(taskArray);
            deleteBtn.parentElement.remove();
        }
        checkbox.setAttribute("type","checkbox")
        checkbox.addEventListener("change",function(){
            if(this.checked){
                todoIteam.classList.add("checked")
            }
            else{
                toawdawddoIteam.classList.remove("checked")
            }
        })
        todoIteam.appendChild(checkbox);
        let textnode=document.createTextNode(inputText);
        let textDiv = document.createElement("div");
        textDiv.appendChild(textnode);
        todoIteam.appendChild(textDiv);
        todoIteam.appendChild(deleteBtn);
        list.appendChild(todoIteam);
    }
}

let button=document.getElementById("btn");
button.onclick=function(){
    addtoDo(input.value);
    
    taskArray.push(input.value);
    localStorage.tasks=JSON.stringify(taskArray) // Updated local storage (JSON.stringify converts the tasks array to a string because local storage can only store strings)
    input.value="";//to clean input field
}