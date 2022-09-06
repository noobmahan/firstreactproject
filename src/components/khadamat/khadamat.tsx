import "./khadamat.css";
import daramad from "../../assets/img/11.png";
import saatkar from "../../assets/img/22.png";
import bashgahranandeh from "../../assets/img/33.png";
import carfix from "../../assets/img/44.png";

function Khadamat() {
  return (
    <section id="section7" className="gray">
      <div className="section7-box">
        <div className="section7-img">
          <img src={daramad} />
        </div>
        <div className="section7-txt">
          <h6> درآمد تضمینی + پاداش‌های ماهانه و هفتگی</h6>
          <p>
            با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در
            لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش
            دهید.
          </p>
        </div>
      </div>
      <div className="section7-box">
        <div className="section7-img">
          <img src={saatkar} />
        </div>
        <div className="section7-txt">
          <h6>ساعت کاری دلخواه</h6>
          <p>
            فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را
            در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی
            کنید.
          </p>
        </div>
      </div>
      <div className="section7-box">
        <div className="section7-img">
          <img src={bashgahranandeh} />
        </div>
        <div className="section7-txt">
          <h6>مزایا و خدمات باشگاه رانندگان</h6>
          <p>
            در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله
            خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند
            شوید.
          </p>
        </div>
      </div>
      <div className="section7-box">
        <div className="section7-img">
          <img src={carfix} />
        </div>
        <div className="section7-txt">
          <h6>کار‌فیکس</h6>
          <p>
            باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای
            سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده
            است.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Khadamat;
