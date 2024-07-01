let inputElement = document.querySelector("#input");
let listContainer = document.querySelector(".todo-list");
let spanElements = document.querySelector(".span-todos");

document.querySelector(".btn-add").addEventListener("click", () => {
   document.querySelector(".noTodo").style.display = "none"
   
   if (inputElement.value === "") {
      alert("Please type something!");
   }
   else {
      let spanElement = document.createElement("span");
      spanElement.innerHTML = inputElement.value;
      listContainer.appendChild(spanElement);

      let finishButton = document.createElement("button");
      finishButton.innerHTML = "Finish";

      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";

      spanElement.appendChild(finishButton);
      spanElement.appendChild(deleteButton);
   }

   inputElement.value = "";
})

listContainer.addEventListener("click", (e) => {
   if (e.target.innerHTML === "Finish") {
      let listItem = e.target.parentNode;
      listItem.classList.toggle("line-through");
   }

   else if (e.target.innerHTML === "Delete") {
      let listItem = e.target.parentNode;
      listContainer.removeChild(listItem);
      inputElement.value = "";
   }
})



