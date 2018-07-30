base_url = 'https://more-recipes.herokuapp.com/api/v1';

function signIn(event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  loginInfo = {
    user: {
      email: email.value,
      password: password.value
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
        // location.replace('page.html');
        console.log(data.token);
      }
    }).catch((err) => {
    console.log(err)
  });
}

document.querySelector('.signin').addEventListener('click', signIn, false);
