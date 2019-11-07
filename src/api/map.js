export const fetchStyle = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
      return res.json();
    });
};
