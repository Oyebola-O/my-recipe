function signUp() {
  const url = 'https://more-recipes.herokuapp.com/api/v1/users/signup';
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
