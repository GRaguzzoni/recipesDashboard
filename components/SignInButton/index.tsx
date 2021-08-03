import { useSession, signIn } from "next-auth/client";
import { FaGithub } from 'react-icons/fa';
import { useRouter } from "next/dist/client/router";
import styles from "./styles.module.scss";


export function SignInButton() {
  const [ session ] = useSession();
  const router = useRouter();

  return session ? (
    router.push("/dashboard")

  ) : (    
    <button 
    type="button" 
    className={styles.signInButton} 
    onClick={() => signIn('github')} 
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>      
  );  
}
