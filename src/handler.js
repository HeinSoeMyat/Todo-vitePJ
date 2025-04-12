import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
    const list = event.target.closest(".list");
    if (event.target.classList.contains("list-edit-btn")) {
        // editList(list);
        editList(event.target.closest(".list").id); //new approach 8
    }

    if (event.target.classList.contains("list-del-btn")) {
        // deleteList(list);
        deleteList(event.target.closest(".list").id); //new approach 6
    }
    if (event.target.classList.contains("list-done-check")) {
        // doneList(list);
        doneList(event.target.closest(".list").id); //new approach 10
    }
}

//new approach 2
export const addTaskBtnHandler = () => {
    // console.log(taskInput.value.trim() ? true : false);
    if (taskInput.value.trim()) {
        addList(taskInput.value);
    } else {
        alert("Enter To Do list");
    }
};

// const addList = () => {
//     // console.log(taskInput.value);
//     //assemble list to listGroup
//     listGroup.append(createNewList(taskInput.value));
//     taskInput.value = null;
//     updateTaskTotal();

// };

//new feature
export const taskInputHandler = (event) => {
    if (event.key === "Enter") {
        if (taskInput.value.trim()) {
            addList(taskInput.value);
        } else {
            alert("Enter your to do list!!");
        }
    }
};

//Bulk Action ()
export const delectAllHandaler = () => {
    if (confirm("are you sure to delect")) {
        const AllListForDel = listGroup.querySelectorAll(".list");
        AllListForDel.forEach((list) => {
            list.classList.add("animate__animated", "animate__zoomOut");
            list.addEventListener("animationend", () => {
                list.remove();
            });
        })
    }
}

export const doneAllHandaler = () => {
    const AllListForDone = listGroup.querySelectorAll(".list");
    AllListForDone.forEach((list) => {
        list.querySelector(".list-done-check").checked = true;
        doneList(list.id);
    })
}