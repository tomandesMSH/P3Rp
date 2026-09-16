const links = [...document.querySelectorAll('.menu-item')];
let selected = 0;
function selectMenu(index) {
  selected = (index + links.length) % links.length;
  links.forEach((link, i) => link.classList.toggle('active', i === selected));
}
links.forEach((link, i) => {
  link.addEventListener('mouseenter', () => selectMenu(i));
  link.addEventListener('focus', () => selectMenu(i));
});
document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
  if (window.scrollY < window.innerHeight * .5 && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
    event.preventDefault();
    selectMenu(selected + (event.key === 'ArrowDown' ? 1 : -1));
    links[selected].focus({preventScroll:true});
  }
  if (event.key === 'Escape') {
    document.querySelector('.screen').scrollIntoView();
    links[selected].focus({preventScroll:true});
  }
});
selectMenu(0);
