document.addEventListener('DOMContentLoaded', () => {
    // Elements selection
    const taskAssignedElement = document.querySelector('.task-assigned');
    const navCountElement = document.querySelector('.nav-count');
    const activityLogContainer = document.querySelector('.activity-log-container');
    const completeButtons = document.querySelectorAll('.complete-button');
    const clearHistoryButton = document.querySelector('.clear-history-button');

    completeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // এলার্ট দেখানো
            alert('Board update successfully');

            // Task Assigned সংখ্যা কমানো
            let taskAssignedCount = parseInt(taskAssignedElement.textContent);
            taskAssignedElement.textContent = taskAssignedCount - 1;

            // nav সংখ্যা বাড়ানো
            let navCount = parseInt(navCountElement.textContent);
            navCountElement.textContent = navCount + 1;

            // কার্যকলাপ লগে বর্তমান তারিখ ও সময় সহ টেক্স জমা
            const currentDateTime = new Date().toLocaleString();
            const logEntry = document.createElement('div');
            logEntry.textContent = `Task completed at ${currentDateTime}`;
            activityLogContainer.appendChild(logEntry);

            // ক্লিক করা বাটনটি হিডেন করা
            button.style.visibility = 'hidden';
        });
    });

    clearHistoryButton.addEventListener('click', () => {
        // কার্যকলাপ লগ পরিষ্কার করা
        const logs = activityLogContainer.querySelectorAll('div');
        logs.forEach(log => log.remove());
    });
});
