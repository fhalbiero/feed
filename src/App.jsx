import { Post } from "./components/Post";
import { Header } from "./components/Header";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='Fabio' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere quos saepe incidunt at vel architecto ex. Eveniet vero quo omnis modi? Nisi tempore voluptatum illum obcaecati. Ullam, deserunt commodi?'/>
          <Post author='Fabio' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere quos saepe incidunt at vel architecto ex. Eveniet vero quo omnis modi? Nisi tempore voluptatum illum obcaecati. Ullam, deserunt commodi?'/>
          <Post author='Fabio' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere quos saepe incidunt at vel architecto ex. Eveniet vero quo omnis modi? Nisi tempore voluptatum illum obcaecati. Ullam, deserunt commodi?'/>
        </main>
      </div>
    </div>
  )
}