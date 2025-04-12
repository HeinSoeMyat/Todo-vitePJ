import { addTaskBtnHandler, delectAllHandaler, doneAllHandaler, listGroupHandler, taskInputHandler } from "./handler.js";
import { addTaskBtn, deleteAll, doneAll, listGroup, taskInput } from "./selectors.js";


const listener = () => {
    addTaskBtn.addEventListener("click", addTaskBtnHandler); //new approach 3
    listGroup.addEventListener("click", listGroupHandler);
    taskInput.addEventListener("keyup", taskInputHandler); //new feature
    deleteAll.addEventListener("click", delectAllHandaler);
    doneAll.addEventListener("click", doneAllHandaler);
};

export default listener();