import image from "../../assets/avatar.jpg";
import styles from "./styles.module.scss";

const Creator = () => {
  return (
    <div className={styles.container}>
      <h1>Who am I?</h1>
      <div className={styles.info}>
        <img src={image} height={200} />
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eius quisquam in officia quos nemo aspernatur quas vel, dolores excepturi itaque! Rem sint enim amet quos rerum esse quidem, aspernatur, commodi aperiam consequatur asperiores labore quasi vel id vitae dolorum reiciendis error! Molestias necessitatibus corrupti dicta explicabo, dignissimos nesciunt sequi ullam mollitia ipsam numquam dolor atque laboriosam dolorem expedita voluptate, suscipit distinctio sapiente eos reprehenderit ipsum eaque perspiciatis provident minus amet. Quae repudiandae, natus earum quisquam aperiam dolor, cumque velit in ducimus eveniet maiores sint illo asperiores. Reprehenderit cupiditate iusto dolorum deserunt asperiores nostrum maxime, dolor dolores vitae laudantium recusandae?</p>
      </div>
    </div>
  );
};

export default Creator;
