import featureImg from "../../assets/featureImg.png";
import star from "../../assets/star.png";
import cube from "../../assets/cube.png";
import hexagon from "../../assets/hexagon.png";

import "./Features.css";

export default function Features() {
  return (
    <>
      <div className="features_div">
        <div className="feature_left">
          <img src={featureImg} alt="" />
        </div>
        <div className="feature_right">
          <p className="feature_topic">FEATURES</p>
          <p className="feature_premium">Uifry Premium</p>

          <div className="feature">
            <div className="feature_name">
              <img className="feature_img" src={star} alt="star" />
              <span className="f_name">Budgeting Intervals</span>
            </div>
            <p className="feature_desc">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="feature">
            <div className="feature_name">
              <img className="feature_img" src={hexagon} alt="hexagon" />
              <span className="f_name">Budgeting Intervals</span>
            </div>
            <p className="feature_desc">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="feature">
            <div className="feature_name">
              <img className="feature_img" src={cube} alt="cube" />
              <span className="f_name">Budgeting Intervals</span>
            </div>
            <p className="feature_desc">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
