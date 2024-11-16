document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('switch');
    const modeToggleText = document.getElementById('mode-toggle-text');

    function updateText() {
        if (toggleSwitch.checked) {
            modeToggleText.innerHTML = 'Switch to light mode'; 
        } else {
            modeToggleText.innerHTML = 'Switch to dark mode';
        }
    }



    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

        updateText();

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        updateText();
    });
    
});
