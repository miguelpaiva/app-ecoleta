
function onOff() {
    modal.classList.toggle("hide");
}

const buttonSearch = document.querySelector("#page-home main a");
const modal = document.querySelector("#modal");
const close = document.querySelector("#modal .header a");

buttonSearch.addEventListener("click", onOff);
close.addEventListener("click", onOff);