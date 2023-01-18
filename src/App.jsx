import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './app.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
           author="Diego Fernandes"
           content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio eliquam"
           />
           <Post 
           author="Gabriel Buzzi"
           content="Um novo post muito legal"
           />
        </main>
      </div>
    </div>
  )
}
