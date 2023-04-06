const buttons = document.getElementsByTagName('button');

function alertUser() {
alert(`Вариант №3`);

}

for (const btn of buttons) {
btn.addEventListener('click', alertUser);
}