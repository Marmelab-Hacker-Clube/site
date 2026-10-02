'use strict'
const switcher = document.querySelector('.btn-theme');

switcher.addEventListener('click', function() {

    // document.body.classList.toggle('dark-theme')

    var className = document.body.className;

    if(className == "light-theme") {
        this.textContent = 'Escuro';
        document.body.className = "dark-theme";
        document.head.className = "dark-theme"

    }
    else {
        this.textContent = 'Claro';
        document.head.className = "light-theme"
        document.body.className = "light-theme";
    }

    console.log('current clas name: ' + className)

    
});
