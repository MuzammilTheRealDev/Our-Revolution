(function() {
    const darkToggle = document.querySelector('.toggle-dark');

    // Initialize theme based on localStorage or system preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkToggle.textContent = 'Light Mode'; // Initial button text
    } else {
        darkToggle.textContent = 'Dark Mode'; // Initial button text
    }

    // Toggle theme and update button text
    darkToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.documentElement.classList.toggle('dark');
        
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            darkToggle.textContent = 'Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            darkToggle.textContent = 'Dark Mode';
        }
    });
})();

