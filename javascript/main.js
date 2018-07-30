  function getRecipes() {
    let request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.token
      },
    };
    
    const url = 'https://more-recipes.herokuapp.com/api/v1/recipes';
    fetch(url, request)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }).catch((err) => {
      console.log(err)
    });
  }

  function getOneRecipe(id) {
    let request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.token
      },
    };
    
    const url = 'https://more-recipes.herokuapp.com/api/v1/recipes/' + id;
    fetch(url, request)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }).catch((err) => {
      console.log(err)
    });
  }