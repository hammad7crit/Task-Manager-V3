let addTaskButton = document.querySelector("#addtaskBtn");
let taskName = document.querySelector("#tasknameMain");
let taskDescription = document.querySelector("#taskdescMain");
let taskPriority = document.querySelector("#priority");
let taskCategory = document.querySelector("#category");
let taskTime = document.querySelector("#time");

let tasksDiv = document.querySelector("#tasksBox");

//streak increasing system
let streakText = document.querySelector("#streaktext")

let streakBox1 = document.querySelector("#streak1");
let streakBox2 = document.querySelector("#streak2");
let streakBox3 = document.querySelector("#streak3");
let streakBox4 = document.querySelector("#streak4");
let streakBox5 = document.querySelector("#streak5");
let streakBox6 = document.querySelector("#streak6");
let streakBox7 = document.querySelector("#streak7");

let streak = 0;
let xpBarUI = document.querySelector("#xpBar");
let xpBar = 0;
let xpCounterUI = document.querySelector("#xpCounter");
let xpCounter = 0;




addTaskButton.addEventListener("click", () => {
    if (taskName.value.trim() !== "") {
        let taskBox = document.createElement("div");
        taskBox.classList.add("border", "border-[#9333EA]", "w-full", "py-6", "px-4", "rounded-2xl", "flex", "flex-col", "gap-3");
        tasksDiv.appendChild(taskBox);

        // header container for task name and delete icon
        let taskHeader = document.createElement("div");
        taskHeader.classList.add("flex", "items-center", "justify-between");
        taskBox.appendChild(taskHeader);

        // Task name
        let taskNameBox = document.createElement("h1");
        taskNameBox.classList.add("font-bold", "text-1xl", "break-words", "whitespace-normal");
        taskNameBox.innerHTML = taskName.value;
        taskHeader.appendChild(taskNameBox);

        // icons contaienr
        let iconsContainer = document.createElement("div");
        iconsContainer.classList.add("flex","gap-3");
        taskHeader.appendChild(iconsContainer);

        // Delete icon
        let taskDeleteIcon = document.createElement("i");
        taskDeleteIcon.classList.add("fa-solid", "fa-trash","bg-gradient-to-b", "from-red-300", "to-red-600","w-10", "h-10", "sm:w-12", "sm:h-12", "text-sm", "sm:text-base",
        "rounded-xl","flex", "justify-center", "items-center","cursor-pointer", "hover:scale-110","transition-all", "duration-300");
        iconsContainer.appendChild(taskDeleteIcon);

        // check mark icon
        let taskCheckIcon = document.createElement("i");
        taskCheckIcon.classList.add("fa-solid", "fa-check","bg-gradient-to-b", "from-orange-300", "to-orange-600","w-10", "h-10", "sm:w-12", "sm:h-12", "text-sm", "sm:text-base","rounded-xl","flex", "justify-center", "items-center","cursor-pointer", "hover:scale-110","transition-all", "duration-300");
        iconsContainer.appendChild(taskCheckIcon);

        // edit icon
        let taskEditIcon = document.createElement("i");
        taskEditIcon.classList.add("fa-solid", "fa-pencil","bg-gradient-to-b", "from-yellow-300", "to-yellow-600","w-10", "h-10", "sm:w-12", "sm:h-12", "text-sm", "sm:text-base","rounded-xl","flex", "justify-center", "items-center","cursor-pointer", "hover:scale-110","transition-all", "duration-300");
        iconsContainer.appendChild(taskEditIcon);

        //super fucking important functionality
        taskCheckIcon.addEventListener("click", function handleClick() {
    // mark task as completed
            taskCheckIcon.classList.add("bg-gradient-to-b", "from-green-300", "to-green-600");

    // streak logic
            streak++;
            streakText.innerHTML = `${streak}-day streak!`;

            if (streak == 1) streakBox1.classList.add("bg-purple-500");
            else if (streak == 2) streakBox2.classList.add("bg-purple-500");
            else if (streak == 3) streakBox3.classList.add("bg-purple-500");
            else if (streak == 4) streakBox4.classList.add("bg-purple-500");
            else if (streak == 5) streakBox5.classList.add("bg-purple-500");
            else if (streak == 6) streakBox6.classList.add("bg-purple-500");
            else if (streak == 7) streakBox7.classList.add("bg-purple-500");

            // XP system
            if (xpBar >= 100) xpBar = 0;
            xpBar += 10;
            xpBarUI.style.width = `${xpBar}%`;
            xpBarUI.className = "bg-green-400 h-3 rounded";

            if (xpCounter >= 100) xpCounter = 0;
            xpCounter += 10;
            xpCounterUI.innerHTML = `${xpCounter} / 100`;

            // remove this listener so clicking again does nothing
            taskCheckIcon.removeEventListener("click", handleClick);
        });


        //super important function
        taskDeleteIcon.addEventListener("click", () => {
            taskBox.remove();
        });

        // Task description
        let taskDescriptionBox = document.createElement("h1");
        taskDescriptionBox.classList.add("text-[#bfb8b8]", "break-words", "whitespace-normal");
        taskDescriptionBox.innerHTML = taskDescription.value;
        taskBox.appendChild(taskDescriptionBox);

        // Choices container
        let choicesBox = document.createElement("div");
        choicesBox.classList.add("flex", "items-center", "gap-2");
        taskBox.appendChild(choicesBox);

        // Category icon and text
        let taskCategoryBoxIcon = document.createElement("i");
        taskCategoryBoxIcon.classList.add("fa-solid", "fa-tag", "text-gray-400", "text-xs");
        choicesBox.appendChild(taskCategoryBoxIcon);

        let taskCategoryBox = document.createElement("p");
        taskCategoryBox.classList.add("text-gray-400");
        taskCategoryBox.innerText = taskCategory.value;
        choicesBox.appendChild(taskCategoryBox);

        // Priority icon and text
        let taskPriorityBoxIcon = document.createElement("i");
        taskPriorityBoxIcon.classList.add("fa-solid", "fa-flag", "text-gray-400", "ml-3", "text-xs");
        choicesBox.appendChild(taskPriorityBoxIcon);

        let taskPriorityBox = document.createElement("p");
        taskPriorityBox.classList.add("text-gray-400");
        taskPriorityBox.innerText = taskPriority.value;
        choicesBox.appendChild(taskPriorityBox);

        // Time icon and text
        let taskTimeIcon = document.createElement("i");
        taskTimeIcon.classList.add("fa-solid", "fa-clock", "text-gray-400", "ml-3", "text-xs");
        choicesBox.appendChild(taskTimeIcon);

        let taskTimeBox = document.createElement("p");
        taskTimeBox.classList.add("text-gray-400");
        taskTimeBox.innerText = taskTime.value;
        choicesBox.appendChild(taskTimeBox);
    }
});
