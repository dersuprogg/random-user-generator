"use strict";

const firstNameEl = document.querySelector(".first-name");
const lastNameEl = document.querySelector(".last-name");
const aboutEl = document.querySelector(".about");
const userImg = document.querySelector(".avatar");
const getUserBtn = document.querySelector(".btn-fetch");

function showUser(user) {
  userImg.style.backgroundImage = `url(${user.picture.large}`;

  firstNameEl.textContent = user.name.first;
  lastNameEl.textContent = user.name.last;

  aboutEl.innerHTML = `
  <p>age: <span class="age">${user.dob.age}</span></p>
  <p>location: <span class="location">${user.location.city}, ${user.location.country}</span></p>
  <p>email: <span class="email">${user.email}</span></p>
  <p>phone: <span class="phone">${user.phone}</span></p>
  `;
}

function fetchUser() {
  const url = "https://randomuser.me/api/";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const user = data.results[0];
      showUser(user);
    });
}

fetchUser();

getUserBtn.addEventListener("click", fetchUser);
