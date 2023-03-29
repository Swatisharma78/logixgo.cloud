import React from "react";
import styles from "./Welcome.module.css";
import homepage from "../images/back.jpg";
const Welcome = () => {
  return (
    <>
      <div
        className={styles.container}
        style={{
          height: "100vh",
          width: "100rw",
          backgroundImage: `url(${homepage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition:"center center",
      
        }}
      >
        <div className={styles.nameDiv}>
          <p className={styles.text1}>A B2B Marketing Agency</p>
          <hr size="10" width="100%" color="grey" />
          <p className={styles.role}>Get standard solutions for increasing your business with our top professionals with the best solutions</p>
        </div>
      </div>
       
    </>
  );
};

export default Welcome;
