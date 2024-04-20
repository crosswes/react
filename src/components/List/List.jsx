// * Styles
import styles from './List.module.css';
import cn from 'classnames';

// * Components
import { LIST } from './List.data.js';

// * Hooks
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const List = () => {
  // const [list, setList] = useState([]);
  // const [error, setError] = useState('');

  // const getList = useCallback(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then(({ data }) => {
  //       setError('');
  //       setList(data);
  //     })
  //     .catch((error) => {
  //       setError('Download error');
  //     });
  // }, []);

  // useEffect(() => {
  //   getList();
  // }, [getList]);

  // const Item = ({ title, body }) => (
  //   <li className={cn([styles.list])}>
  //     <h3>{title}</h3>
  //     <p>{body}</p>
  //   </li>
  // );

  // if (error) {
  //   return <p>{error}</p>;
  // }
  // if (!list.length) {
  //   return <p>The list is empty</p>;
  // }
  // if (list.length) {
  //   return (
  //     <ul className={cn([styles.list])}>
  //       {list.map(({ body, title, id }) => (
  //         <Item title={title} body={body} key={`List item ${id}`} />
  //       ))}
  //     </ul>
  //   );
  // }

  return (
    <ul className={cn([styles.list])}>
      {/* [error ? (<p>{error}</p>) : list.lenght ? (list.map(([body, title, id]) =>{' '}
      <Item title={title} body={body} key={`List item ${id}`} />) ) :(
      <p>The list is empty</p>) ] */}
      {LIST.map((item, index) => (
        <li
          key={item.id}
          className={index === 0 ? styles.orange : styles[item.className]}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default List;
