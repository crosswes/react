const LIST = [
  {
    id: 1,
    content: 'Product',
    className: 'orange',
    // как мне можно было обыграть это так что бы не пришлось писать className={index === 0 ? styles.orange : styles[item.className]} а использовать className: 'orange'?
  },
  {
    id: 2,
    content: 'Customers',
  },
  {
    id: 3,
    content: 'Pricing',
  },
  {
    id: 4,
    content: 'Resources',
  },
];

export { LIST };
