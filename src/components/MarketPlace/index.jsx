import Item from "./Product";
import styles from "./styles.module.scss";

const MarketPlace = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Try Our Products:</h1>
      </div>
      <div className={styles.listContainer}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default MarketPlace;
