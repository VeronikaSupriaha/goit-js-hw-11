import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchUsers } from './js/pixabay-api';
import { renderUsers } from './js/render-functions';
const input = document.querySelector('#data-input');
const searchBtn = document.querySelector('[data-search]');
const userList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchBtn.addEventListener('click', event => {
  event.preventDefault();
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
  const searchParams = new URLSearchParams({
    key: '43027284-ae8275f6d108abc1bc2578323',
    q: input.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;
  fetchUsers(url)
    .then(hits => renderUsers(hits.hits, userList, loader))
    .catch(error => console.log(error));
});
