import styles from './header.module.css'
import logoimg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div>
            <header className={styles.container}>
                <div>
                    <Link to='/'>
                        <img src={logoimg} alt="logo cripto" />
                    </Link>
                </div>
            </header>
        </div>
    )
}