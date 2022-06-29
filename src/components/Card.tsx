import cover from "../img/cover.png";

interface CardProps {
  swap: boolean;
  img: string;
  setSwap: () => void;
}

const Card: React.FC<CardProps> = ({ swap, img, setSwap }) => {
  return (
    <div className="card" onClick={() => setSwap()}>
      <img className={`front ${swap && "hide"}`} src={cover} alt="" />
      <img className={`back ${swap && "show"}`} src={img} alt="" />
    </div>
  );
};

export default Card;
