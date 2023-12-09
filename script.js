let buttons = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');
let equalBtn = document.querySelector('.equal');
let allClearBtn = document.querySelector('.all-clear');

let value = '';
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', function (event) {
        value += event.target.innerHTML;
        console.log(event.target.innerHTML);
        screen.value = value;
    });

    equalBtn.addEventListener('click', function(){
        if(screen.value === ''){
            screen.value = '';
        }

        screen.value = eval(screen.value);
        value='';
        console.log(screen.value);
    });
    allClearBtn.addEventListener('click', function() {
         screen.value = '';
         value='';
    });
});
