import { useEffect, useRef, useState } from 'react';
import { getUsers, getPositions } from '../utils/api';
import './App.scss';
import Form from './Form/Form';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import List from './List/List';
import Preloader from './Preloader/Preloader';

function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  // будем хранить данные сколько общее количество страниц
  const totalPage = useRef();
  const effectRan = useRef(false);

  useEffect(() => {
    if (!effectRan.current) {

      const dataPositions = async () => {
        try {
          const res = await getPositions();
          setPositions(res.positions);
        } catch (error) {
          console.log(error)
        }
      };

      // делаем запрос на бек позиции
      dataPositions();

      // делаем запрос на бек пользователей берем
      dataUser(page);

      // loading убираем 
      setLoading(false);
    }
    return () => { effectRan.current = true };
    // eslint-disable-next-line
  }, [])

  const dataUser = async (data) => {
    try {
      const res = await getUsers({ page: data });
      setUsers(prev => ([...prev, ...res.users].sort((a, b) => b['registration_timestamp'] - a['registration_timestamp'])));
      totalPage.current = res.total_pages;
    } catch (error) {
      console.log('dataUser', error)

    }
  }

  // при успешной добовление пользователя на сервер добовляем его в массив
  const addNewUser = (data) => {
    setUsers(prev => ([data, ...prev.slice(0, 5)]))
    // обнуляем page
    setPage(1);
  }


  const onShownMore = () => {
    dataUser(page + 1);
    setPage(prev => prev + 1);
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      {loading ?
        <Preloader />
        :
        <List users={users} lastPage={totalPage.current === page} onShownMore={onShownMore} />
      }
      <Form addNewUser={addNewUser} positions={positions} />
    </div>
  );
}

export default App;
