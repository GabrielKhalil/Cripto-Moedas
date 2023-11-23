import styles from './error.module.css'

export function NotFound(){
    return(
        <div className={styles.errorcontainer}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.notFound}>Page Not Found</p>
        <a className={styles.linkHome} href="/">Go Home</a>
    </div>
    )
}