import styles from './Section.module.css';

function Container({ children }) {
    return (
        <div className={styles.section}>{children}</div>
    );
}

export default Container;