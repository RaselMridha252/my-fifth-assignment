


    document.addEventListener('DOMContentLoaded', function () {
    const taskAssigned = document.querySelector('.task-assigned'); 
    const navCount = document.querySelector('.nav-count'); 
    const completedButtons = document.querySelectorAll('.complete-btn'); 
    const activityLog = document.querySelector('.activity-log'); 
    const clearHistoryButton = document.querySelector('.clear-history'); 
    const totalTasks = completedButtons.length; 
    
    let completedTaskCount = 0; 
    
    completedButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        alert('Board update successfully');
        taskAssigned.textContent = parseInt(taskAssigned.textContent) - 1; 
        navCount.textContent = parseInt(navCount.textContent) + 1; 
        button.disabled = true; 
        button.style.backgroundColor = 'grey'; 
  
        
        const taskHeading = button.closest('.grid-cols-2').parentNode.querySelector
        ('.task-heading').textContent;
        const currentTime = new Date().toLocaleTimeString();
        const logEntry = 'You have completed the task : ' + ' ' + taskHeading + ' at ' + currentTime;
        const logItem = document.createElement('h2');
        logItem.textContent = logEntry;
        activityLog.appendChild(logItem);
        
        
        completedTaskCount++;

        
        
        if (completedTaskCount === totalTasks) {
          alert('You have completed all task');
        }
      });
    });
  
    
    clearHistoryButton.addEventListener('click', function () {
      activityLog.innerHTML = ''; 
    });
  });
  




  
    const goQusPage = document.getElementById('go-qus-page');
    goQusPage.onclick = function() {
    
    window.location.href = 'question.html';
};





    function updateCalendar() {
    const dateCard = document.getElementById('date-card');
    const now = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    dateCard.innerHTML = day + " , " + month + "  " + date + "  " + year;
}

    updateCalendar();

    setInterval(updateCalendar, 1000);




    function getRandomColor() {
    const letters = '0123456';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 7)];
    }
    return color;
}


    const button = document.getElementById('color-btn');

    button.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor; 
});