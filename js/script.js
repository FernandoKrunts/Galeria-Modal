const imagens = document.querySelectorAll(".imagens img");
const nome = document.querySelectorAll(".nome");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#modalImage");
let btnClose = document.querySelector(".close");
let srcVal = "";
let closeModal = document.querySelector(".close");

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("click", function () {
    srcVal = imagens[i].getAttribute("src");
    modalImg.setAttribute("src", srcVal);
    modal.classList.toggle("modalActive");
  });
}

closeModal.addEventListener("click", function () {
  modal.classList.toggle("modalActive");
});
