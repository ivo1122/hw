const params = new URLSearchParams(window.location.search);






window.addEventListener("load", () => {
  const username = localStorage.getItem("username");
  const surname = localStorage.getItem("surname");
  const email = localStorage.getItem("email");
  const details = localStorage.getItem("details");

  document.getElementById("result-name").textContent = username;
  document.getElementById("result-surname").textContent = surname;
  document.getElementById("result-email").textContent = email;
  document.getElementById("result-details").textContent = details;
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    window.location.href = "/overview/index.html";
    localStorage.clear()
});

