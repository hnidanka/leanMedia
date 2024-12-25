import './style.scss'
function Card ({id, text}) {
    return (
      <div className="card">
      <p className="text">{text}</p>
      <div className='order-num'>{id}</div>
      </div>
    );
  }
   export default Card;