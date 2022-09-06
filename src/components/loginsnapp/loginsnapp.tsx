import "./loginsnapp.css";
import daramad from "../../assets/img/11.png";
import saatkar from "../../assets/img/22.png";
import khadamatranandeh from "../../assets/img/33.png";
import carfixsnapp from "../../assets/img/44.png";

function Loginsnapp() {
  return (
    <section id="section6">
      <div className="register-driver">
        <h4>در کمتر از 10 دقیقه ثبت نام کنید و به ناوگان اسنپ بپیوندید</h4>
        <p>
          بدون نیاز به مراجعه حضوری از طریق این صفحه تمام مراحل ثبت نام را به
          صورت اینترنتی انجام دهید
        </p>
        <a href="https://digitalsignup.snapp.ir/">
          <button type="button">ثبت نام رانندگان</button>
        </a>
      </div>
      <div className="video">
        <video src={require("../../assets/img/videoan.mp4")} controls />
      </div>
    </section>
  );
}
export default Loginsnapp;
