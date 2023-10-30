const item =document.querySelector("#item")
const toDoBox =document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",                  // keyup mens :- somithing write by use
    function(event){
        if(event.key == "Enter"){           // if user do enter then hole value store in addToDo 
            addToDo(this.value)
            this.value =""
        }
    }
)


const addToDo=(item)=>{
    const listItem =document.createElement("li");   // creating a li for storing data
    listItem.innerHTML =` ${item} <i class="fas fa-times">< /i>`;

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")    // toggle mens:- add and remove the class
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem. remove()
        }
    )
    toDoBox.appendChild(listItem)    // for append the listitem
}