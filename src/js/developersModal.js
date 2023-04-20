import { developers } from './developersCard';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import { refs } from './refs';

refs.developersBoard.innerHTML = personalCard(developers);

refs.openModalBtnFoot.addEventListener('click', onOpenModal);
refs.backdropTeamFoot.addEventListener('click', onBackdropClick);
refs.closeModalBtnFoot.addEventListener('click', onCloseModal);

function personalCard(developers) {
  const markup = developers
    .map(({ image, name, role, instagram, github, linkedin, facebook }) => {
      return `
          <li class='devcont-item'>
    <a href="#" class='devcont-link'>
      <div class='devcont-imgbox'>
        <img src="${image}" alt='${name}' class='devcont-img' loading="lazy"/>
      </div>
      <div class='devcont-description'>
        <p class='devcont-name'>${name}</p>
        <p class='devcont-position'>${role}</p>
      </div>
          <div class='devcont-social-network'>
        <ul class='social-network-box'>
          <li class='social-network-item'>
            <a href="${github}" class='social-network-link'>
              <i class="icon fab fa-github"></i>
            </a>
          </li>
          <li class='social-network-item'>
            <a href="${instagram}" class='social-network-link'>
              <i class="icon fab fa-instagram"></i>
            </a>
          </li>
            <li class='social-network-item'>
            <a href="${facebook}" class='social-network-link'>
              <i class="icon fab fa-facebook"></i>
            </a>
          </li>
          <li class='social-network-item'>
            <a href="${linkedin}" class='social-network-link'>
              <i class="icon fab fa-linkedin"></i>
            </a>
          
          </li>
        </ul>
      </div>
    </a>
  </li>
          `;
    })
    .join('');
  return markup;
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdropTeamFoot.classList.remove('is-hidden');
  refs.backdropTeamFoot.classList.remove('show-modal');
  const body = document.body;
  body.style.overflowY = 'hidden';
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdropTeamFoot.classList.remove('show-modal');
  refs.backdropTeamFoot.classList.add('is-hidden');
  const body = document.body;
  body.style.overflowY = '';
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
