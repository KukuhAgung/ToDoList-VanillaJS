class Task {
  constructor() {
    this.tasks = this.getTasks();
  }
  getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  saveTask(taskData) {
    const newTaskData = {
      id: Date.now(),
      isCompleted: false,
      ...taskData,
    };

    this.tasks.push(newTaskData);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  completeTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks[index].isCompleted = true;
      this.updateLocalStorage();

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

      Toast.fire({
        icon: "success",
        title: "Task completed successfully",
      });
    }
  }

  deleteTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index != -1) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
      window.location.reload();
    }
  }
  updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
