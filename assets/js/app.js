let add = document.querySelector(".add");
let save = document.querySelector(".save");
let i = 0;
var num = document.querySelector(".var_num");

add.addEventListener("click", () => {
    num.innerHTML = ++i;
});

let array_num = [];
let text = document.querySelector(".text_print");

save.addEventListener("click", () => {
    if (i > 0) {
        array_num.push(i);
        if (array_num.length > 3) {
            text.innerHTML = array_num.slice(-3).join(', ');
        } else {
            text.innerHTML = array_num.join(', ');
        }
        i = 0;
        num.innerHTML = i;
    }
});