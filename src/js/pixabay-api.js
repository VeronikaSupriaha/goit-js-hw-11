export function fetchUsers(value) {
  const searchParams = new URLSearchParams({
    key: '43027284-ae8275f6d108abc1bc2578323',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;
  return fetch(url).then(response => {
    return response.json();
  });
}
