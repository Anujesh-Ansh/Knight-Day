// selectors -> that selects an item from html
const themeToggleBtn = document.querySelectorAll('.theme-toggle');

// state -> that can be used globally
const theme = localStorage.getItem('theme');

// on mount
// to make to the same even on refreshing
// if (theme){ 
//     document.body.classList.add('dark-mode');
// }

theme && document.body.classList.add('dark-mode'); // this is like the above if statement

// handlers
handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode'); // can specify which component i want to toggle , or simply want to add a class name to the body

    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
    }
    else{
        localStorage.removeItem('theme');
    }
}

// events
themeToggleBtn.forEach(btn => btn.addEventListener('click', handleThemeToggle));