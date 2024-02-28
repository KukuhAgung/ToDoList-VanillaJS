// Penghubung UI HTML dan Model User

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameInput);

    if (result.success) {
      localStorage.setItem("userLoggedIn", usernameInput);
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      }).then(() => {
        window.location.href = "../pages/tasks.html";
      });
    } else {
      console.log(result.message);
    }
  });
});
