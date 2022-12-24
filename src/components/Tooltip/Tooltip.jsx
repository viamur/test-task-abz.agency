import './Tooltip.scss';

const Tooltip = ({ children, text }) => {
  return (
    <div className={'wrap'}>
      {children}
      <span className={'tooltip'}>{text}</span>
    </div>
  );
};

export default Tooltip;
