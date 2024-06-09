import testiImg from "../../assets/testimonial.png";
import testiPerson from "../../assets/testiPersons.png";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial_div">
        <div className="testimonial_heading">
          <p className="testi_topic">TESTIMONIAL</p>
          <p className="testi_sub_topic">What Our Users Say About Us?</p>
        </div>
        <div className="testi_container">
          <div className="testimonial_left">
            <img src={testiImg} alt="testimonials" />
          </div>
          <div className="testimonial_right">
            <div className="testi_name">
              The Best Financial Accounting App Ever!
            </div>
            <div className="testi_desc">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </div>
            <div className="testiPersons">
              <img src={testiPerson} alt="" />
            </div>
            <div className="testiClientName">Nick Jonas</div>
          </div>
        </div>
      </div>
    </>
  );
}
