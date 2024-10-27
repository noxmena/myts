let timerInterval;
let seconds = 0;

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    document.getElementById("timer").textContent = "00:00:00";
}

function updateTimer() {
    seconds++;
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${hrs}:${mins}:${secs}`;
}

// Reminders based on current time
function checkReminders() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    let reminderMessage = "Stay focused and check your schedule!";

    if (hour === 17 && minute >= 40 && minute < 60) {
        reminderMessage = "Time for Math Preparation!";
    } else if (hour === 18 && minute < 30) {
        reminderMessage = "Enjoy your dinner break!";
    } else if (hour === 18 && minute >= 30 && hour < 20) {
        reminderMessage = "Focus on English study!";
    } else if (hour === 20) {
        reminderMessage = "Attend your meeting!";
    } else if (hour === 21 || hour === 22) {
        reminderMessage = "Time for Math or Database Study!";
    } else if (hour === 22 && minute >= 30) {
        reminderMessage = "Research scholarships!";
    } else if (hour === 23) {
        reminderMessage = "Wrap up and organize your notes!";
    }

    document.getElementById("reminderMessage").textContent = reminderMessage;
}

// Check reminders every minute
setInterval(checkReminders, 60000);
checkReminders(); // Initial check on page load