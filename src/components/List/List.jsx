import Button from '../Button/Button';
import Card from '../Card/Card';
import Container from '../Container/Container';
import s from './List.module.scss';

const List = ({ users, onShownMore, lastPage }) => {
  return (
    <section className={s.section} id="users">
      <Container>
        <h2 className={s.title}>Working with GET request</h2>
        <ul className={s.list}>
          {users.map((el, idx) => {
            return <Card key={idx} data={el} />;
          })}
        </ul>
        {!lastPage && <Button title={'Show more'} disabled={lastPage} handleClick={onShownMore} />}
      </Container>
    </section>
  );
};

export default List;
