export const getTodo = () => fetch("https://dummyjson.com/todos?limit=5").then((response) => response.json());
