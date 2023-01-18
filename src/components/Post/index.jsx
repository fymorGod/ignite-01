import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/fymorGod.png"
          />
          <div className={styles.authorInfo}>
            <strong>Fylip Moreira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-01-18 14:54:00" title="18 de Janeiro às 14:57h">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋</p>

        <p>
          {" "}
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉 {' '}
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto </a>
          <a href="#"> #nlw </a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        placeholder="Deixe um comentário"
        /> 
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
