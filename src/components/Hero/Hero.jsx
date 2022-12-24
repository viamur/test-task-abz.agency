import { Button } from 'react-scroll';
import Container from '../Container/Container';

import s from './Hero.module.scss';
import styleBtn from '../Button/Button.module.scss';

const Hero = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrap}>
          <h1 className={s.title}>Test assignment for front-end developer</h1>
          <h2 className={s.desc}>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </h2>
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
        </div>
      </Container>
    </section>
  );
};

export default Hero;
