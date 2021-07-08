fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((todoElement) => {
      console.log(todoElement);
    });
  });
