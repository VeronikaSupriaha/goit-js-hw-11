import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchUsers } from './js/pixabay-api';
import { renderUsers } from './js/render-functions';
const input = document.querySelector('#data-input');
const userList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('1');
  loader.classList.remove('is-hidden');
  userList.innerHTML = '';
  if (input.value === '') {
    iziToast.show({
      title: 'Error',
      message: 'Please, fill the field to start search images. ',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    return;
  }

  fetchUsers(input.value)
    .then(hits => renderUsers(hits.hits, userList, loader))
    .catch(error => console.log(error));
  form.reset();
});
