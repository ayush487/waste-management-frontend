import trashCan from "../../assets/trash-can.png"

const Logo = () => {
  return (
    <div className="logo">
      <span>
        <img src={trashCan} alt="logo" />
      </span>
      <div className="slogan">
        <h1>Waste Solutions</h1>
        <h6>"Reduce, Reuse, Recycle"</h6>
      </div>
    </div>
  );
};

export default Logo;
