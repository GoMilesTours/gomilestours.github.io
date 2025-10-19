document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon.");
});