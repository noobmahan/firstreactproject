import "./intro.css";
import introimg from "../../img/intro_desktop.jpg";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1>
          تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌ صرفه‌تر با سوپراپلیکیشن اسنپ!
        </h1>
        <p>
          از درخواست خدرو گرفتهتا سفارش غذا،خرید سوپر مارکتی،خرید بلیط
          سفر،مشاوره پزشکی و روانشناسی،رزرو هتل و ...را می توانیدبا سوپر
          اپلیکیشن اسنپ انجام دهید.
        </p>
      </div>
      <div
        className="intro-img"
        style={{
          backgroundImage: `url("${introimg}")`,
        }}
      ></div>
    </section>
  );
}
export default Intro;
