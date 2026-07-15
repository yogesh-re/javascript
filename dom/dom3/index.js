let task=document.getElementById("task");
console.log(task);
let list=document.getElementById("list")

document.getElementById("btn").addEventListener("click", () => {
   
    if(task.value== ""){
        alert("Please enter a task")
        return;
    }else{
        let li=document.createElement("li")
        li.innerHTML=`${task.value}`


            let complete=document.createElement("button");
            complete.innerHTML="Complete"; 
            complete.addEventListener("click", () => {
                li.style.textDecoration="line-through"
            })

            let dlt=document.createElement("button");
            dlt.innerHTML="remove";

            dlt.addEventListener("click", () => {
                list.removeChild(li)
            })
            task.value="";
            li.appendChild(complete) 
            li.appendChild(dlt)


        list.appendChild(li)
        
    }

})