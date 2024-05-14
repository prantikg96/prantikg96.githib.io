const addTaskBtn = () => {
    const taskInput = document.getElementById('inputTask');
    const taskInputValue = taskInput.value.trim();
    
    if(taskInputValue !== "")
    {
        const taskListUL = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = '<input type="checkbox"> ' + taskInputValue + ' <button onclick="delEachTask(this)">Delete This Task</button>';
        taskListUL.appendChild(li);
        taskInput.value = '';
    }
    else
    {
        alert("Please Add a Task !!");
    }
};

const delEachTask = (delBtn) => {
    // console.log(delBtn.parentNode);
    const li = delBtn.parentNode;   // means we are taking li tag
    li.parentNode.removeChild(li);   // means we are taking ul tag
};

const delCheckedBtn = () => {
    const taskList = document.getElementById('taskList');
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    // console.log(checkBoxes); // returns as NodeList array

    // if there are no checkboxes selected for deletion:
    if(checkBoxes.length === 0)
    {
        alert("Please Select At Least 1 Item To Delete !!");
        return;
    }

    // to separate each items, we are using forEach loop here:
    checkBoxes.forEach(checkBox => {
        // console.log(checkBox.parentNode);    // li is checkBox's parent node
        const li = checkBox.parentNode;
        li.parentNode.removeChild(li);
    });
};

const selectAllBtn = () => {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

    if(checkBoxes.length === 0)
        {
            alert("You Haven't Added Anything !! Add Items to the List at First !!!");
            return;
        }

    checkBoxes.forEach(checkBox => {
        checkBox.checked = true;
    });
};




// if we use trim() then it will remove/not consider the unnecessary spaces before and after a sentence.
// eg:
// console.log("    Hello All      "); // this will show spaces
// console.log("    Hello All      ".trim()); // this will not show spaces