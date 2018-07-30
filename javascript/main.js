base_url = 'https://more-recipes.herokuapp.com/api/v1';
function signUp() {
    // @author James Eneh
  const url = `${base_url}/users/signup`;
  let data = {
    user: {
      fullname: "James Eneh",
      email: "james@gmail.com",
      password: "enjd9393md#"
    }
  };
  let fetchData = { 
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
  };

  fetch(url, fetchData)
  .then((resp) => resp.json(), (error) => {
    console.error(error);
    alert('SignUp cannot be completed at this time! Try again');
  })
  .then((data) => {
    if (data.status == 'success') {
      console.log(data);
    } else {
      console.log(data);
    }
  }, (error) => {
    console.error(error);
    alert('SignUp cannot be completed at this time! Try again');
  })
  .catch ((error) => {
    console.error(error);
    alert('Unable to sign up, try again');
  });
}

function signIn(user) {
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
        location.replace('page.html');
      }
    }).catch((err) => {
    console.log('')
  });
}


document.addEventListener('DOMContentLoaded', () => {
  signIn();
});
