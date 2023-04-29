const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!!!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li) //display
        let span = document.createElement("span") //adding cross symbol
        span.innerHTML = "\u00d7" //cross icon
        li.appendChild(span) //displaying cross icon
    }
    // emptying input box after clicking add button
    inputBox.value = "" ;
    saveData();
}
// click function 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false);

// store datas to local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
// display the datas after refreshing the page
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
