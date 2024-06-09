import hero_left from "../../assets/Hero_left.png";
import heroImg from "../../assets/heroImg.png";
import playBtn from "../../assets/play_btn.png";

import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero_div">
        <div className="left">
          <div className="up_left">
            <p className="hero_tag">Make The Best Financial Decisions</p>
            <p className="hero_sub_tag">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="hero_btns">
              <div className="get_started_btn">
                Get Started{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <div className="video_btn">
                <span>
                  <img src={playBtn} alt="playBtn" />
                </span>
                Watch Video
              </div>
            </div>
          </div>
          <div className="down_left">
            <img src={hero_left} alt="FeaturesImg" />
          </div>
        </div>
        <div className="right">
          <img className="heroImg" src={heroImg} alt="ellipses" />
        </div>
      </div>
    </>
  );
}
