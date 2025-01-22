
const inputBox = document.getElementById("input-box");

const ListContainer = document.getElementById("list-container");

function AddTask() {

    if (inputBox.value === '') {
        alert("empty task cannot be added")

    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }

    inputBox.value = "";
    savedata();
}

ListContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata()
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);


function savedata() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();