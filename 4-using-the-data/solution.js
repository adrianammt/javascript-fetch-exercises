const main = document.querySelector("main");

const url = `https://randomuser.me/api/?inc=gender,name,picture&results=10`;

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.results.forEach((user) => {
      main.append(createCard(user));
    });
  });

function createCard(user) {
  const userSection = document.createElement("section");
  userSection.classList.add("person");

  const name = document.createElement("h2");
  const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  const foto = document.createElement("img");
  foto.src = user.picture.medium;
  foto.alt = userName;

  userSection.append(userName);
  userSection.append(foto);

  return userSection;
}

/*<section class="person">
  <h2>Person Name</h2>
  <img src="url-to-person-picture" alt="Person Name" />
</section>*/
