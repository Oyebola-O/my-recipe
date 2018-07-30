base_url = 'https://more-recipes.herokuapp.com/api/v1';

function signIn(user)
{
  loginInfo = {
    user: {
      email: 'tmorolaari@gmail.com',
      password: 'password'
    }
  }
  let fetchData = {
    method: 'POST',
    body: loginInfo,
    headers: {
      'Content-Type': 'application/json'
    },

  };
  const url = `${base_url}/users/login`;
  fetch(url, fetchData)
    .then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log('')
  });
}


document.addEventListener('DOMContentLoaded', () => {
  signIn();
});
