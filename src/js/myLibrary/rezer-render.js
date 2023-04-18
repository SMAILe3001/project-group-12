export default function rezetGalleryFilm() {
  let activePage = document.querySelector(
    '.menu-list__link--active'
  ).textContent;

  if (activePage === 'Home') {
    return;
  }

  let activeWatch = document.querySelector(
    '.library__button--active'
  ).textContent;

  if (activeWatch === 'Queue') {
    console.log('тут рендер очереди');
  }
  console.log('тут рендер просмотрених');
}
