const NASA_API_BASE_URL = 'https://api.nasa.gov';
const NASA_API_KEY = 'API_KEY';

const NASA_PLANETARY_FULL_ENDPOINT = `${NASA_API_BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}`;

const getPlanetary = async () => {
  return await fetch(NASA_PLANETARY_FULL_ENDPOINT).then(res => res.json());
};

document.addEventListener('DOMContentLoaded', () => {
  const nasaImg = document.getElementById('js-nasa-img');
  nasaImg.src = './loading.gif';

  getPlanetary().then(res => {
    nasaImg.src = res.url;
  });
});
