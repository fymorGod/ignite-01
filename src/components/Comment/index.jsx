import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={"https://github.com/diego3g.png"} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fylip Moreira</strong>
              <time dateTime="2023-01-18 14:54:00" title="18 de Janeiro às 14:57h">
                Cerca de 1h atrás
              </time>
            </div>

            <button
            onClick={handleDeleteComment}
            title='Deletar comentário'
             >
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
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