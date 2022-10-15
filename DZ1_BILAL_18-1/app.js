
const innInput = document.querySelector(".innInput");
const innChek = document.querySelector(".innChek");
const innResult = document.querySelector(".innResult");

const innRegExp = /^2\d{13}$|1\d{13}$/

innChek.addEventListener("click", () => {
    if (innRegExp.test(innInput.value)){
        innResult.innerHTML = "ok";
        innResult.style.color = "green";
    } else {
        innResult.innerText = "not ok";
        innResult.style.color = "red";
    }
})



const block2 = document.querySelector('.block2');

let number = 0;
const zoom = function (Blockleft) {
    number++;
    block2.style.left = `${number}px`;
    if (number < 50){
        return zoom();
    }else if (number > 349){
        number = 0;
    }else {
        number += 50;
    }
    Blockleft();
};
block2.addEventListener('click', zoom);
