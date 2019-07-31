let apiUrl
const apiUrls = {
  production: 'https://immense-thicket-14716.herokuapp.com/customers',
  development: 'http://localhost:8000/customers'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
