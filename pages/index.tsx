import { useSession } from "next-auth/client"
import { SignInButton } from "../components/SignInButton"
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h2>Fazer login</h2>
        <SignInButton />
      </div>
      
    </>
  )

  
}
