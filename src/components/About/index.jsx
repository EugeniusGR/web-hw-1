import image from "../../assets/background.jpg";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Who we are?</h1>
        <div className={styles.mainInfo}>
          <img src={image} height={300} />
          <p className={styles.textInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea ad nemo consequatur obcaecati enim rerum. Ea molestias, enim
            cupiditate dolorem repellendus porro voluptas alias, fugit excepturi
            dolor non amet.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.mainInfo}>
          <p className={styles.textInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea ad nemo consequatur obcaecati enim rerum. Ea molestias, enim
            cupiditate dolorem repellendus porro voluptas alias, fugit excepturi
            dolor non amet.
          </p>
          <img src={image} height={300} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.mainInfo}>
          <img src={image} height={300} />
          <p className={styles.textInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea ad nemo consequatur obcaecati enim rerum. Ea molestias, enim
            cupiditate dolorem repellendus porro voluptas alias, fugit excepturi
            dolor non amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
