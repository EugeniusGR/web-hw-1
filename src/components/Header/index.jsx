import React from "react";
import styles from './styles.module.scss'

const Header = ({setPage}) => {
  return (
    <div className={styles.header}>
      <span onClick={()=>setPage('home')} className={styles.headerName}>Fresh Apple</span>
      <div className={styles.listContainer}>
          <ul className={styles.listUl}>
              <li onClick={()=>setPage('news')}>News</li>
              <li onClick={()=>setPage('about')}>About</li>
              <li onClick={()=>setPage('creator')}>Creator</li>
          </ul>
      </div>
    </div>
  );
};

export default Header
