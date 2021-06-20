import styles from "./MainBanner.module.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import Socials from "components/socials/Socials";
import clsx from "clsx";


const MainBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}/>
      <div className={styles.main}>
        <Row className={clsx(styles.textContainer, "animate__animated animate__fadeIn")}>
          <Col lg={6} xl={6}>
            <h1>Our Coffee</h1>
            <p>
              Since 1971, it always has been and will always be about quality. We’re passionate about ethically sourcing
              only the finest Arabica coffee beans and roasting them with great care. Our passion for coffee is rivaled
              only by our love of sharing it.
            </p>
            <Button className={styles.button}>
              Learn More
            </Button>
          </Col>
          <Col lg={6} xl={6} className={styles.frappe}/>
        </Row>
      </div>
      <Socials/>
    </div>
  );
};

export default MainBanner;
