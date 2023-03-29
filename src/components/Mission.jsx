import React from "react";
import styles from "./Mission.module.css";
import homepage from "../images/background.jpg";

const Mission = () => {
  return (
    <div
      id="Mission"
      className={styles.container}
      style={{
        backgroundImage: `url(${homepage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.contentdiv}>
        <div className={styles.childdiv}>
         <h1 className={styles.missionheading}>Mission</h1>
         <p style={{marginTop:'30px'}}>To create long-lasting business partnerships with clients by delivering excellent stakeholder 
value in a respectful environment. </p>
        </div>
        <div className={styles.childdiv}>
        <h1 className={styles.missionheading}>Vision</h1>
        <p style={{marginTop:'30px', marginBottom:'30px'}}>Our demand, detection, and delivered will help you meet better first-hand experiences with 
our clients. Customer satisfaction is our top priority.</p>
        </div>
        <div className={styles.childdiv}>
        <h1 className={styles.missionheading}>Value</h1>
        <p style={{marginTop:'30px', marginBottom:'30px'}}>Dedicated to delivering top-notch services. The innovation-based constant pursuit of 
excellence</p>
        </div>
      </div>
    </div>
  );
};
export default Mission;
