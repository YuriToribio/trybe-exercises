import Swal from "sweetalert2";

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const ACCESS_TOKEN = '10217541316643742';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random()*MAX_HEROES );

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  fetch(`${BASE_URL}/${id}`)
  .then((response) => response.json())
  .then((data) => {
    img.src = data.image.url;
    name.innerHTML = data.name;
  })
}).cath((error) => Swal.fire({
  title: 'Hero not found',
  text: error.message,
  icon: 'error',
  confirmButtonText: 'Cool',
}));