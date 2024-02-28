// Bussiness logic
// Mengelola data CRUD

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }
  signInUser(usernameByInput) {
    const userExist = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userExist) {
      return {
        success: true,
        username: usernameByInput,
      };
    } else {
      return {
        success: false,
        message: "Data tidak ditemukan",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
