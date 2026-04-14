document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer Logic: 30-second looping timer
    const timerDisplay = document.getElementById('timer');
    let timeLeft = 30;

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            timeLeft = 30; // Reset to 30 seconds
        }

        const s = timeLeft.toString().padStart(2, '0');
        timerDisplay.textContent = `00 : 00 : ${s}`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial call to display the timer immediately
    updateTimer();
});
