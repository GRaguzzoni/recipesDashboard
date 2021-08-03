import { session } from "next-auth/client";
import { FaGithub } from "react-icons/fa";
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <FaGithub  color="#84d361"/>
      </div>
    </ header>
  )
}