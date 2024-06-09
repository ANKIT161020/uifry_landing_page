import getStartedImg from "../../assets/getStarted.png";
import "./Getstarted.css";

export default function Getstarted() {
  return (
    <>
      <div className="getstarted_div">
        <div className="started_left">
          <p className="started_heading">Ready To Get Started?</p>
          <p className="started_sub_heading">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <div className="download_btn">
            Download App
            <i className="fa-brands fa-apple"></i>
          </div>
        </div>
        <div className="started_right">
          <img src={getStartedImg} alt="getstarted" />
        </div>
      </div>
    </>
  );
}
