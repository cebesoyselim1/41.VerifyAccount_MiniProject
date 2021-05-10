let numbers = document.querySelectorAll(".digit");

numbers.forEach((number) => {
    number.addEventListener("keydown", (e) => {
        e.target.value = "";
        if((e.key >= 0 && e.key <= 9) && (number.nextElementSibling)){
            setTimeout(() => {
                number.nextElementSibling.focus();
            },10);
        }else if((e.key == "Backspace") && (number.previousElementSibling)){
            setTimeout(() => {
                number.previousElementSibling.focus();
            },100)
        }
    })
})