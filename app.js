/* Created by Tivotal */

let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  header.classList.toggle("active");
});
