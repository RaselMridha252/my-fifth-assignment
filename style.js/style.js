

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
            logEntry.textContent = `You have completed the taks at: ${currentDateTime}`;
                activityLogElement.appendChild(logEntry);
        });
    });

    clearHistoryButton.addEventListener('click', () => {
        activityLogElement.innerHTML = '';
    });
});
