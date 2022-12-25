import { useState } from 'react';
import { getToken, getUserID, postUser } from '../../utils/api';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Input from '../Input/Input';
import Preloader from '../Preloader/Preloader';
import RadioButton from '../RadioButton/RadioButton';
import UploadInput from '../UploadInput/UploadInput';

import successSvg from '../../images/icon/svg/success-image.svg';
import s from './Form.module.scss';

const initialError = {
  name: null,
  email: null,
  phone: null,
  file: null,
  send: null,
};

const email_pattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const phone_pattern = /^\+?3?8?(0\d{9})$/;

const Form = ({ positions, addNewUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(1);
  const [file, setFile] = useState(null);

  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // для кнопки определяем disabled или нет(если есть хоть одна ошибка или одно пустое поле то кнопка будет не активна)
  const disabled =
    !error.email &&
    !error.file &&
    !error.name &&
    !error.phone &&
    name &&
    email &&
    phone &&
    checked &&
    file;

  // изменение форм и тд
  const handleChange = e => {
    const input = e.target;

    input.name === 'name' && setName(input.value);
    input.name === 'email' && setEmail(input.value);
    input.name === 'phone' && setPhone(input.value);
  };

  const handleChecked = num => {
    setChecked(num);
  };

  // для валидации
  const onBlur = e => {
    const { name, value } = e.target;

    // валидация поля name
    if (name === 'name') {
      if (value.length > 60 || value.length < 2) {
        setError(prev => ({ ...prev, name: 'Username should contain 2-60 characters' }));
        return;
      }
      setError(prev => ({ ...prev, name: null }));
      return;
    }

    // валидация поля email
    if (name === 'email') {
      if (value.length > 100 || value.length < 2) {
        setError(prev => ({ ...prev, email: 'minLength: 2 - maxLength: 100' }));
        return;
      }
      if (!email_pattern.exec(value)) {
        setError(prev => ({
          ...prev,
          email: 'Must be a valid email according to RFC2822',
        }));
        return;
      }
      setError(prev => ({ ...prev, email: null }));
      return;
    }

    // валидация поля phone
    if (name === 'phone') {
      if (!phone_pattern.exec(value)) {
        setError(prev => ({
          ...prev,
          phone: 'Number should start with code of Ukraine +380',
        }));
        return;
      }

      setError(prev => ({ ...prev, phone: null }));
      return;
    }
  };

  // reset form
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setChecked(1);
    setFile(null);
    setLoading(false);
  };

  // сабмит формы
  const handleSubmit = async () => {
    // e.preventDefault();
    setError(prev => ({ ...prev, send: null }));
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('position_id', checked);
      formData.append('phone', phone);
      formData.append('photo', file);

      await getToken();
      const response = await postUser(formData);

      if (response.success) {
        const dataNewUser = await getUserID(response['user_id']);
        addNewUser(dataNewUser.user);
        setSuccess(true);
        resetForm();
      }
      setLoading(false);
    } catch (error) {
      console.log('handleSubmit', error);
      setLoading(false);
      setError(prev => ({ ...prev, send: error.response.data.message }));
    }
  };

  return (
    <section id="form" className={s.section}>
      <Container>
        <h2 className={s.title}>
          {success ? 'User successfully registered' : 'Working with POST request'}
        </h2>
        {success ? (
          <img
            className={s.successSvg}
            width={328}
            height={290}
            src={successSvg}
            alt="User successfully registered"
          />
        ) : (
          <form className={s.form}>
            <Input
              name={'name'}
              type={'text'}
              label={'Your name'}
              error={error.name}
              value={name}
              handleChange={handleChange}
              onBlur={onBlur}
              minLength={2}
              maxLength={60}
              marginBottom={50}
            />
            <Input
              name={'email'}
              type={'email'}
              label={'Email'}
              error={error.email}
              value={email}
              handleChange={handleChange}
              onBlur={onBlur}
              minLength={2}
              maxLength={60}
              marginBottom={50}
            />
            <fieldset className={s.phoneInput}>
              <Input
                name={'phone'}
                type={'tel'}
                label={'Phone'}
                error={error.phone}
                value={phone}
                handleChange={handleChange}
                onBlur={onBlur}
                minLength={12}
                maxLength={13}
                marginBottom={4}
              />
              {!error.phone && <span className={s.phoneInput__text}>+38 (XXX) XXX - XX - XX</span>}
            </fieldset>
            <p className={s.title__radioBtn}>Select your position</p>
            <fieldset className={s.radioBtns}>
              {positions.map(el => {
                return (
                  <RadioButton
                    data={el}
                    key={el.id}
                    checked={checked}
                    handleChecked={handleChecked}
                  />
                );
              })}
            </fieldset>
            <UploadInput
              file={file}
              setFile={setFile}
              error={error.file}
              setError={setError}
              marginBottom={50}
            />
            {error.send && <span className={s.errorSend}>{error.send}</span>}
            {loading ? (
              <Preloader />
            ) : (
              <Button title={'Sign up'} disabled={!disabled} handleClick={handleSubmit} />
            )}
          </form>
        )}
      </Container>
    </section>
  );
};

export default Form;
