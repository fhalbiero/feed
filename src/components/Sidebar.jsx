import { PencilLine } from "phosphor-react";
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=' alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/39344416?v=4" alt="" />
                <strong>Fabio Albiero</strong>
                <span>FullStack Engineer</span>
            </div>
            <footer>
                <a href="">
                    <PencilLine size={20}/>
                    Edit Profile
                </a>
            </footer>
        </aside>
    )
}