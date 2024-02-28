// Penghubung UI HTML dan Model User

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();


  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      localStorage.setItem("userLoggedIn", usernameByInput);
      window.location.href = "../pages/tasks.html";
    } else {
      console.log(result.message);
    }
  });
});
