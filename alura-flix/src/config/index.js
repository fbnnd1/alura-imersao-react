const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://imersao-aluraflix01.herokuapp.com' //'https://devsoutinhoflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
