import { Link, Button } from 'react-scroll';
import Container from '../Container/Container';

import sprite from '../../images/icon/sprite.svg';
import s from './Header.module.scss';
import styleBtn from '../Button/Button.module.scss';

const Header = () => {
  return (
    <header id="header" className={s.header}>
      <Container>
        <div className={s.wrap}>
          <svg aria-label="logo" height={26} width={104}>
            <use href={sprite + '#icon-Logo'} />
          </svg>
          <nav>
            <ul className={s.list}>
              <li className={s.item}>
                <Button
                  className={styleBtn.btn}
                  type="button"
                  value="Users"
                  title="Users"
                  to="users"
                  spy={true}
                  smooth={true}
                  duration={500}
                />
              </li>
              <li>
                <Button
                  className={styleBtn.btn}
                  type="button"
                  value="Sign up"
                  title="Sign up"
                  to="form"
                  spy={true}
                  smooth={true}
                  duration={500}
                />
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
