/* Theme Toggle */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener(
    "click",
    toggleTheme
);

function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        themeBtn.textContent =
            "☀️ Light Mode";

    } else {

        themeBtn.textContent =
            "🌙 Dark Mode";
    }
}

/* Live Clock */

const clock =
    document.getElementById("clock");

function updateClock() {

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();

/* Task Manager */

const taskInput =
    document.getElementById("taskInput");

const addTaskBtn =
    document.getElementById("addTaskBtn");

const taskList =
    document.getElementById("taskList");

const taskCount =
    document.getElementById("taskCount");

let totalTasks = 0;

addTaskBtn.addEventListener(
    "click",
    addTask
);

function addTask() {

    const taskText =
        taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li =
        document.createElement("li");

    li.classList.add(
        "task-item"
    );

    const span =
        document.createElement("span");

    span.textContent =
        taskText;

    const deleteBtn =
        document.createElement("button");

    deleteBtn.textContent =
        "Delete";

    deleteBtn.classList.add(
        "delete-btn"
    );

    deleteBtn.addEventListener(
        "click",
        function () {

            li.remove();

            totalTasks--;

            updateTaskCount();
        }
    );

    li.appendChild(span);

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    totalTasks++;

    updateTaskCount();
}

function updateTaskCount() {

    taskCount.textContent =
        `Tasks: ${totalTasks}`;
}

/* Quote Generator */

/* Quote Generator */

const quoteBtn =
    document.getElementById("quoteBtn");

const quoteText =
    document.getElementById("quoteText");

quoteBtn.addEventListener(
    "click",
    generateQuote
);

function generateQuote() {

    quoteText.textContent =
        "Loading quote...";

    fetch(
        "https://dummyjson.com/quotes/random"
    )
        .then(response =>
            response.json()
        )
        .then(data => {

            quoteText.textContent =
                `"${data.quote}" — ${data.author}`;

        })
        .catch(() => {

            quoteText.textContent =
                "Unable to load quote.";

        });
}

generateQuote();