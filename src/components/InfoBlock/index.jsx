import image from '../../assets/cider.png'
import styles from "./styles.module.scss";

const InfoBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Try this new Cider!</h1>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.imageCiber}/>
      </div>
    </div>
  );
};

export default InfoBlock;
