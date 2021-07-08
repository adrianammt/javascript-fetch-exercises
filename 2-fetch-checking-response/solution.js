const url = `https://jsonplaceholder.typicode.com/todos/x`;

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return 404;
    }
  })
  .then((data) => console.log(data));

//This won't work because for js 404 is not an error.
/*
  .catch((error) => {
    alert(response.status);
  });*/
