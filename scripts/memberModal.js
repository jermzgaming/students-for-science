setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);

const aboutUsModal = document.querySelector(".about-us-modal");
const aboutUsModalOverlay = document.querySelector(".about-us-modal .overlay");
const memberContainers = document.getElementsByClassName("member-container");

for (let i = 0; i < memberContainers.length; i++) {
  memberContainers[i].addEventListener("click", () => {
    aboutUsModal.classList.add("enabled");
    document.body.classList.add("stop-scrolling");
  });
}

aboutUsModalOverlay.addEventListener("click", () => {
  aboutUsModal.classList.remove("enabled");
  document.body.classList.remove("stop-scrolling");
});