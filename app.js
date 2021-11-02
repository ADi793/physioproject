const form = document.querySelector("form");
const usernameInput = document.querySelector("input[name=username]");
const passwordInput = document.querySelector("input[name=password]");
const formButton = document.querySelector("button[type=submit]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // values
  const uid = usernameInput.value;
  const password = passwordInput.value;

  const user = { uid, password };

  axios
    .post("https://myphysio.digitaldarwin.in/api/login/", user)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location = "/success.html";
    })
    .catch((err) => {
      const errorDiv = document.createElement("div");
      const errorParagraph = document.createElement("p");
      errorParagraph.classList.add("error");
      errorParagraph.innerText = "Invalid username and password";
      errorDiv.appendChild(errorParagraph);

      form.appendChild(errorDiv);
      formButton.remove();
      form.appendChild(formButton);
      console.log("user is not logged in");
    });
});
