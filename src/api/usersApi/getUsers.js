export const getUsers = (count = 5) => fetch(`https://randomuser.me/api/?results=${count}`).then((res) => res.json());
