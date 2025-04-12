//day 48
//initialRender = the things that are shown when the app start like demo or example for the app
import { addList, tasks } from "./list.js";

const initialRender = () => {
  console.log("initail render work"); 
  tasks.forEach((task) => addList(task));
};

export default initialRender();