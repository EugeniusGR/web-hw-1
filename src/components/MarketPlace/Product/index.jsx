import img from "../../../assets/cider.png";

import styles from "./styles.module.scss";

const Item = () => {
  return (
    <div className={styles.container}>
      <h2>Apple Cider</h2>
      <div className={styles.containerImage}>
        <img src={img} height={300} />
      </div>
      <div className={styles.descr}>
        <span>Type: Cider</span>
        <span>Expiration date: 2 weeks</span>
        <span>Price: $1.2 </span>
      </div>
    </div>
  );
};

export default Item;
