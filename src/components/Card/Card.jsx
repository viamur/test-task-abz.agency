import Tooltip from '../Tooltip/Tooltip';
import s from './Card.module.scss';

const Card = ({ data }) => {
  // функция будет длинный текст резать и ставить точки
  const maxLength = 29;

  const resizeText = text => {
    if (text.length > maxLength) {
      const sliceText = `${text.slice(0, maxLength)}...`;
      return sliceText;
    }
    return text;
  };

  return (
    <li className={s.item}>
      <img src={data.photo} className={s.img} alt={data.name} />
      {data.name.length > maxLength ? (
        <Tooltip text={data.name}>
          <h4 className={s.name}>{resizeText(data.name)}</h4>
        </Tooltip>
      ) : (
        <h4 className={s.name}>{data.name}</h4>
      )}
      {data.position.length > maxLength ? (
        <Tooltip text={data.position}>
          <h5 className={s.position}>{resizeText(data.position)}</h5>
        </Tooltip>
      ) : (
        <h5 className={s.position}>{data.position}</h5>
      )}
      {data.email.length > maxLength ? (
        <Tooltip text={data.email}>
          <p className={s.email}> {resizeText(data.email)}</p>
        </Tooltip>
      ) : (
        <p className={s.email}>{data.email}</p>
      )}
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
