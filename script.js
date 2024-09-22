const buttons = document.querySelectorAll('.tempButton');

function handleClick() {
    const customPageURL = "pages/blank.html";
    window.location.href = customPageURL;
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', handleClick);
})