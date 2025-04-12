//don't forget to add .js coz this project is not using vite 
//so you will need to manually add the exact file path and type of file

//day 48
import initialRender from "./initialRender.js";
import listener from "./listener.js"; 
import observer from "./observer.js";

class Todo {
    init() {
        console.log("init work");
        observer(); //this must be in the first place coz this will know the changes of the listgroup
        initialRender();
        listener();
    }
};
export default Todo;