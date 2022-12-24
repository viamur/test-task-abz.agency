import s from './Card.module.scss';

const data = {
  id: '30',
  name: 'Angel',
  email: 'angel.williams@exampleррррррррррррр.com',
  phone: '+380496540023',
  position: 'Designer',
  position_id: '4',
  registration_timestamp: 1537777441,
  photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg',
};
const Card = ({}) => {
  // функция будет длинный текст резать и ставить точки
  const resizeText = text => {
    const maxLength = 29;
    if (text.length > maxLength) {
      const sliceText = `${text.slice(0, maxLength)}...`;
      return sliceText;
    }
    return text;
  };

  return (
    <li className={s.item}>
      <img src={data.photo} className={s.img} alt={data.name} />
      <h4 className={s.name}>{resizeText(data.name)}</h4>
      <h5 className={s.position}>{resizeText(data.position)}</h5>
      <p className={s.email}> {resizeText(data.email)}</p>
      <p className={s.phone}>{data.phone}</p>
    </li>
  );
};

export default Card;

/* 
{
            "id": "30",
            "name": "Angel",
            "email": "angel.williams@example.com",
            "phone": "+380496540023",
            "position": "Designer",
            "position_id": "4",
            "registration_timestamp": 1537777441,
            "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg"
        },
*/
