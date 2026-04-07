let tasks=[];
document.getElementById("btn").addEventListener("click",function()
{
    let task=document.getElementById("task").value;
    if(task=== "")
    {
        alert("Enter a Task First");
        return;
    }
    tasks.push(task);
    display();
   
})
function display()
{
    let list=document.getElementById("list");
    list.innerHTML="";
    for(let i=0 ; i < tasks.length; i++)
    {
        list.innerHTML+=`<li> ${tasks[i]} <button onclick="Delete(${i})">Delete Task</button></li>`;

    }
   
}
 function Delete(index)
    {
        tasks.splice(index,1);
        display();
    }