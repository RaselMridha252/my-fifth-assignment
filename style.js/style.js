

document.addEventListener('DOMContentLoaded', (event) => {
    const completedButtons = document.querySelectorAll('.completed-button');
    const taskAssignedElement = document.querySelector('.task-assigned');
    const navCountElement = document.querySelector('.nav-count');
    const activityLogElement = document.querySelector('.activity-log');
    const clearHistoryButton = document.querySelector('.clear-history-button');

    completedButtons.forEach(button => {
        button.addEventListener('click', () => {
        alert('Board update successfully');
        const taskAssignedCount = parseInt(taskAssignedElement.textContent);
            taskAssignedElement.textContent = taskAssignedCount - 1;

        const navCount = parseInt(navCountElement.textContent);
                navCountElement.textContent = navCount + 1;

            button.disabled = true;
            button.style.backgroundColor = 'grey';

            const currentDateTime = new Date().toLocaleString();
            const logEntry = document.createElement('div');
            logEntry.textContent = `You have completed the taks: ${currentDateTime}`;
                activityLogElement.appendChild(logEntry);
        });
    });

    clearHistoryButton.addEventListener('click', () => {
        activityLogElement.innerHTML = '';
    });
});

// ---------------------------------------------------------------------------

document.getElementById('discover-button').addEventListener('click', function() {
    
    window.location.href = 'question.html';
});

// --------------------------------------------------------------------------------

function getRandomColor() { 
    const letters = '0123456'; 
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 7)];
    }
    return color;
}

function changeBackgroundColor() { 
    document.body.style.backgroundColor = getRandomColor();
}

document.querySelector('.circle-button').addEventListener('click', changeBackgroundColor); 

// ---------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    const dateCard = document.getElementById("date-card");
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    dateCard.innerText = currentDate.toLocaleDateString('en-US', options);
});





