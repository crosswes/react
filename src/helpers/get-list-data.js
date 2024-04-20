const createListItem = (text) => {
  const listItem = document.createElement('li');
  listItem.textContent = text;
  return listItem;
};

const getListData = async () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);

      response.forEach((item) => {
        const listItem = createListItem(item.title);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getListData };
