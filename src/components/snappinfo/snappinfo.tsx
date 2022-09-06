import "./snappinfo.css";
import superappimg from "../../assets/img/super-app.jpg";
import snappinfoa from "../../assets/img/1.png";
import snappinfob from "../../assets/img/2.png";
import snappinfoc from "../../assets/img/3.png";

function snappinfo() {
  return (
    <section className="section5">
      <div
        id="section5-background-image"
        style={{
          backgroundImage: `url("${superappimg}")`,
        }}
      ></div>
      <div id="section5-text">
        <h5>سوپر اپ اسنپ پاسخ به تمامی نیاز ها</h5>
        <p>
          اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد
          شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید
          و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر
          درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و
          مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط
          (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده
          کنید.
        </p>
      </div>
      <div id="section5-botten">
        <div className="section5-botten-box">
          <div className="section5-botten-img">
            <img src={snappinfoa} />
          </div>
          <h6>اسان</h6>
          <p>
            برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن
            اسنپ شوید و روی آیکون مورد نظر بزنید.
          </p>
        </div>
        <div className="section5-botten-box">
          <div className="section5-botten-img">
            <img src={snappinfob} />
          </div>
          <h6>سریع</h6>
          <p>
            قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
            می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
          </p>
        </div>
        <div className="section5-botten-box">
          <div className="section5-botten-img">
            <img src={snappinfoc} />
          </div>
          <h6>به صرفه‌</h6>
          <p>
            سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا
            بهترین خدمات را با قیمتی منطقی دریافت کنید.
          </p>
        </div>
      </div>
    </section>
  );
}
export default snappinfo;
