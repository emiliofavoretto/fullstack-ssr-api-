import { examples } from "@/data/crud"
import Card from '@components/Card' 
import styles from './page.module.css'

export default function Page() {

    // await new promise((resolve) => setTimeout(resolve, 500));

    return (
        <>  
            <main className={styles.main}>  
                {examples.map(({id, method, verb, description, color, Icon}) =>(
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        description={description}
                        color={color}
                        Icon={Icon}
                        />
                ))}
            </main>
            <footer className={styles.footer}>
                <p>Codeverse &copy; {new Date().getFullYear()}</p>
                <p>Next.js - Axios - Ant Design - Lucid</p>
            </footer>
        </>
    )
}