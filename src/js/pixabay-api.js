export function fetchUsers(url) {
  return fetch(url).then(response => {
    return response.json();
  });
}
