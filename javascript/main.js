base_url = 'https://more-recipes.herokuapp.com/api/v1';

function signIn(user) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  loginInfo = {
    user: {
      email: 'tmorolari@gmail.com',
      password: 'password'
    }
  };
  let fetchData = {
    method: 'POST',
    body: JSON.stringify(loginInfo),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const url = `${base_url}/users/login`;
  fetch(url, fetchData)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (typeof(Storage) !== "undefined") {
        localStorage.token = data.token;
        location.replace('page.html');
      }
    }).catch((err) => {
    console.log('')
  });
}


document.addEventListener('DOMContentLoaded', () => {
  signIn();
});
