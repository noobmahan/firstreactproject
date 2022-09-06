import { isBreakOrContinueStatement } from "typescript";
import "./snappoption.css";
import cab from "../../assets/img/cab.svg";
import bike from "../../assets/img/bike.svg";
import pickup from "../../assets/img/Pickup-new.png";
import food from "../../assets/img/food.svg";
import market from "../../assets/img/market.svg";
import trip from "../../assets/img/Domestic Trip.png";
import doctor from "../../assets/img/doctor.svg";
import hotel from "../../assets/img/hotel.png";
import trip2 from "../../assets/img/trip.svg";
import shop from "../../assets/img/new Shop.png";
import bus from "../../assets/img/bus.png";
import train from "../../assets/img/train.png";
import club from "../../assets/img/club.svg";
import service from "../../assets/img/Service Icon.png";
import moving from "../../assets/img/Moving.png";
import pay from "../../assets/img/pay.svg";
import ticket from "../../assets/img/ticket-icon.svg";

function Snappoption() {
  return (
    <section id="section3">
      <h2>یک اپلیکیشن برای تمام نیاز ها</h2>
      <a href="https://snapp.ir/bike-delivery/">
        <img src={cab} />
        <div>
          <h3>تاکسی اینترنتی</h3>
          <p>امکان درخواست انلاین خودرو با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/pickup-truck/">
        <img src={bike} />
        <div>
          <h3>پیک موتوری </h3>
          <p>حمل و نقل با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/online-food-delivery/">
        <img src={pickup} />
        <div>
          <h3>درخواست وانت</h3>
          <p>حمل نقل با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/online-supermarket-grocery/">
        <img src={food} />
        <div>
          <h3>سفارش انلاین غذا</h3>
          <p>سفارش غذا نان و شیرنی با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/service-express/">
        <img src={market} />
        <div>
          <h3>سوپر مارکت انلاین</h3>
          <p>تهیه اغلام روزانه بااسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/flights-ticket/">
        <img src={market} />
        <div>
          <h3>اسنپ اکسپرس</h3>
          <p>تحویل کم تر از 30 دیقه</p>
        </div>
      </a>
      <a href="https://snapp.ir/international-flight/">
        <img src={trip} />
        <div>
          <h3>بلیط پرواز داخلی</h3>
          <p>گردشگری با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/medical-services/">
        <img src={trip} />
        <div>
          <h3>بلیط پرواز خارجی</h3>
          <p>گردشگری با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/hotels/">
        <img src={doctor} />
        <div>
          <h3>دکتر</h3>
          <p>درمان با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/lodgings/">
        <img src={hotel} />
        <div>
          <h3>رزرو هتل</h3>
          <p>گردشگری با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={trip2} />
        <div>
          <h3>رزرو اقامتگاه</h3>
          <p>گردشگری با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={shop} />
        <div>
          <h3>فروشگاه</h3>
          <p>خرید از فروشگاه های معتبر شهر</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={bus} />
        <div>
          <h3>بلیط اتوبوس</h3>
          <p>گردشگری با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={train} />
        <div>
          <h3>بلیط قطار گردشگری با اسنپ</h3>
          <p>گردشگری با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={club} />
        <div>
          <h3>اسنپ! کلاب</h3>
          <p>باشگاه مشتران اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={service} />
        <div>
          <h3>اسنپ تیکت</h3>
          <p>خرید انلاین بلیط با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={moving} />
        <div>
          <h3>اسنپ تیکت</h3>
          <p>خرید انلاین بلیط با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={pay} />
        <div>
          <h3>اسنپ تیکت</h3>
          <p>خرید انلاین بلیط با اسنپ</p>
        </div>
      </a>
      <a href="https://snapp.ir/shop/">
        <img src={ticket} />
        <div>
          <h3>اسنپ تیکت</h3>
          <p>خرید انلاین بلیط با اسنپ</p>
        </div>
      </a>
    </section>
  );
}

export default Snappoption;
