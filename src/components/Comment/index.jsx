import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/fymorGod.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fylip Moreira</strong>
              <time dateTime="2023-01-18 14:54:00" title="18 de Janeiro às 14:57h">
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  );
}