import './Tooltip.scss';

const Tooltip = ({ children, text }) => {
  // делаем пробелы каждые 30 символов для коретного отображения
  const maxLength = 29;

  const hyphenation = text => {
    const part = Math.round(text.length / maxLength);
    const arr = [];

    for (let i = 0; i <= part; i += 1) {
      arr.push(text.slice((i - 1) * maxLength, maxLength * i));
    }
    return arr.join(' ');
  };

  return (
    <div className={'wrap'}>
      {children}
      <span className={'tooltip'}>{hyphenation(text)}</span>
    </div>
  );
};

export default Tooltip;
