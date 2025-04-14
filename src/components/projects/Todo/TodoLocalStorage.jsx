const todoKey = "todoList";

export const getLocalStorageData = () => {
  const storedTasks = localStorage.getItem(todoKey);
  // return storedTasks ? JSON.parse(storedTasks) : [];
  if (!storedTasks) {
    return [];
  }
  return JSON.parse(storedTasks);
};

export const setLocalStorageData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};
