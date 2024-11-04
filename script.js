// const panels = document.querySelectorAll(".panel");

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

// panels.forEach((panel) => {
//   panel.addEventListener("click",() => {
//     if (panel.classList.contains("active")) {
//       removeActiveClasses();
//     } else {
//       removeActiveClasses();
//       panel.classList.add("active");
//     }
//   });
// });

const flickerElement = document.querySelector('.neon .delay');

  function applyRandomDelay() {
    // Generate a random delay between 1 and 9 seconds
    const randomDelay = Math.floor(Math.random() * 20) + 1;
    // Apply the random delay to the flicker animation
    flickerElement.style.animationDelay = `${randomDelay}s`;
  }

  // Set an interval to change the delay periodically
  setInterval(applyRandomDelay, 2000);
