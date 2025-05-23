import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";



const observer = () => {
    const job = () => {
        console.log("you change in listGroup");
        updateDoneTaskTotal();
        updateTaskTotal();
    };
    const observerOptions = {
        childList: true,
        subtree: true,
        attributes: true,
    };
    const listGroupObserver = new MutationObserver(job);
    listGroupObserver.observe(listGroup, observerOptions);
};

export default observer();