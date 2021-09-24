import {NewsBlock} from './NewsBlock'
import styles from './styles.module.scss'

const News = () => {
    return (
        <div className={styles.container}>
            <h1>News</h1>
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
        </div>
    )
}

export default News