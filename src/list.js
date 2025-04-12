import { v4 as uuidv4 } from 'uuid';
import { doneTaskTotal, taskTotal } from "./selectors.js";
import Swal from 'sweetalert2';

export const tasks = ["To read JS books", "Meditation", "Wake up early"]; //day 48

export const updateTaskTotal = () => {
    //count and update
    const lists = document.querySelectorAll(".list");
    taskTotal.innerText = lists.length;
}


export const updateDoneTaskTotal = () => {
    //count and update
    const lists = document.querySelectorAll(".list input:checked");
    doneTaskTotal.innerText = lists.length;
}
export const createNewList = (currentTask) => {
    const list = listTemplate.content.cloneNode(true);
    // list.querySelector(".list").id = "list" + Date.now(); //it will have a little bit problem when the list are created in the same time so we will use uuid instead of Date.now() to make the id be more unique or another option is count.
    list.querySelector(".list").id = "list" + uuidv4();
    list.querySelector(".list-task").innerText = currentTask;

    return list;
};

export const deleteList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    console.log("u del");
    Swal.fire({
        title: "Do you want to delete the list?",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            currentList.classList.add("animate__animated", "animate__zoomOut");
        //currentList will continue when the animation end
        currentList.addEventListener("animationend", () => {
            currentList.remove();
        //     updateTaskTotal(); this will be comment coz observer is running so this function doesn't need anymore
        //     updateDoneTaskTotal(); this will be comment coz observer is running so this function doesn't need anymore
        });
        }
    });
    // if (window.confirm("Are you sure to delete?")) {
    //     currentList.classList.add("animate__animated", "animate__zoomOut");
    //     //currentList will continue when the animation end
    //     currentList.addEventListener("animationend", () => {
    //         currentList.remove();
    //         updateTaskTotal();
    //         updateDoneTaskTotal();
    //     });
    // }
};

export const editList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    console.log("u edit");

    const listEditBtn = currentList.querySelector(".list-edit-btn");
    const listDoneCheck = currentList.querySelector(".list-done-check");
    const listTask = currentList.querySelector(".list-task");

    listEditBtn.setAttribute("disabled", true);
    listDoneCheck.setAttribute("disabled", true); //not to touch checkbox while it is under editing

    const currentTask = listTask.innerText;
    const newTaskInput = document.createElement("input");
    newTaskInput.value = currentTask;
    newTaskInput.className = "border border-stone-900 font-mono w-[180px] focus-visible:outline-none px-2 py-1";
    listTask.after(newTaskInput);
    newTaskInput.focus(); //cursor will be appeared simutaneously when you activate edit button
    listTask.classList.add("hidden");

    newTaskInput.addEventListener("blur", () => {
        listEditBtn.removeAttribute("disabled");
        listDoneCheck.removeAttribute("disabled");//when it is finished editing, you can be able to use checkbox again
        console.log("edit finish");
        listTask.innerText = newTaskInput.value;
        listTask.classList.remove("hidden");
        newTaskInput.remove();
    });
};


export const doneList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    console.log("u done");
    const listDoneCheck = currentList.querySelector(".list-done-check");
    const listTask = currentList.querySelector(".list-task");
    const listEditBtn = currentList.querySelector(".list-edit-btn");

    updateDoneTaskTotal();
    listTask.classList.toggle("line-through");
    currentList.classList.add("duration-200");
    currentList.classList.toggle("opacity-20");
    currentList.classList.toggle("scale-90");

    //the condition when checkbox is activate, the editBtn is disabled process and the oppite
    if (listDoneCheck.checked) {
        listEditBtn.setAttribute("disabled", true);
    } else {
        listEditBtn.removeAttribute("disabled");

    }
};


export const addList = (text) => {
    // console.log(taskInput.value);
    //assemble list to listGroup
    listGroup.append(createNewList(text));
    taskInput.value = null;
    // updateTaskTotal(); this will be comment coz observer is running so this function doesn't need anymore

};