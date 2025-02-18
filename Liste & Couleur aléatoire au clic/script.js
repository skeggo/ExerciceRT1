
function getRandomColor() {
  
  const randomInt = Math.floor(Math.random() * 16777215);
  return "#" + randomInt.toString(16).padStart(6, "0");
}

const myList = document.getElementById('myList');
const listItems = myList.querySelectorAll('li');

listItems.forEach((li) => {
  li.addEventListener('click', () => {
    li.style.backgroundColor = getRandomColor();
  });
});
