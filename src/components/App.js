import { useEffect, useRef, useState } from 'react';
import { getUsers, getPositions } from '../utils/api';
import './App.scss';
import Form from './Form/Form';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import List from './List/List';
import Preloader from './Preloader/Preloader';

function App() {
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  // будем хранить данные сколько общее количество страниц
  const totalPage = useRef();

  useEffect(() => {
    if (page === 0) {
      const data = async () => {
        const res = await getPositions();
        setPositions(res.positions);
      }
      data();

      // что б два запроса гет не делало
      setPage(1);
      return;
    }

    const data = async () => {
      const res = await getUsers({ page });

      setUsers(prev => [...prev, ...res.users]);
      totalPage.current = res.total_pages;
    }

    data();
    setLoading(false);
  }, [page])

  const onShownMore = () => {
    setPage(prev => prev + 1);
    console.log(page)
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      {loading ?
        <Preloader />
        :
        <List users={users} lastPage={totalPage === page} onShownMore={onShownMore} />
      }
      <Form positions={positions} />
    </div>
  );
}

export default App;
