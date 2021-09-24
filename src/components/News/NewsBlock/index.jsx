import styles from "./styles.module.scss";
import image from "../../../assets/cider.png";

const NewsBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} width={150} />
      </div>
      <div>
        <div className={styles.header}>
          <h3>Lorem, ipsum dolor.</h3>
        </div>
        <div className={styles.body}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            omnis quia doloribus dignissimos quod, ea tempora id, architecto
            quaerat at, necessitatibus tenetur deserunt nostrum provident nam
            maxime esse nisi. Tempore, facilis praesentium expedita adipisci aut
            officiis impedit eveniet dolores animi nostrum laboriosam? Repellat
            temporibus, dolores modi mollitia fuga quos est.
          </p>
        </div>
        <span className={styles.seeAll}>See all...</span>
      </div>
    </div>
  );
};

export { NewsBlock };
