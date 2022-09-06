import "./snappfood.css";
import food from "../../assets/img/Food.jpg";

function Snappfood() {
  return (
    <section id="section4">
      <a href="https://food.snapp.ir/?utm_source=snapp&utm_medium=slider&utm_campaign=new-landing">
        <img src={food} />
      </a>
    </section>
  );
}

export default Snappfood;
