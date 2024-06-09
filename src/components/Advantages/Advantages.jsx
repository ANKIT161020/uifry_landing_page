import advImg from "../../assets/advantageImg.png";
import advImg2 from "../../assets/advImg2.png";
import notiIcon from "../../assets/notification.png";
import advIcon2 from "../../assets/advicon2.png";
import "./Advantages.css";

export default function Advantages() {
  return (
    <>
      <div className="advantages_div" id="Pricing">
        <div className="advantage1">
          <div className="advantages1_left">
            <p className="advantage_topic">ADVANTAGES</p>
            <p className="why_uifry">Why Choose Uifry?</p>
            <div className="advantage_name">
              <img
                className="notification_img"
                src={notiIcon}
                alt="notificationIcon"
              />
              <span className="a_name">Clever Notifications</span>
            </div>
            <p className="advantage_desc">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
          <div className="advantages1_right">
            <img src={advImg} alt="Advantage Img" />
          </div>
        </div>

        <div className="advantage2">
          <div className="advantages2_left">
            <img src={advImg2} alt="Advantage Img" />
          </div>
          <div className="advantages2_right">
            <div className="advantage_name">
              <img
                className="notification_img"
                src={advIcon2}
                alt="notificationIcon"
              />
              <span className="a_name">Fully Customizable</span>
            </div>
            <p className="advantage_desc">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
