import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([
    'Muito bom Devon, parabéns!! 👏👏'
  ]);
  const [newCommentText, setCommentNewText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment() {
    event.preventDefault();
    //imutabilidade
    setComments([...comments, newCommentText]); //spread operator
    setCommentNewText('');
  }
  function handleNewCommentChange() {
    setCommentNewText(event.target.value)
  }
  function deleteComment(comment) {
    //imutabilidade -> as variáveis não sofrem mutação
    setComments()
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar                     
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {
          content.map((item) => {
            if(item.type === 'paragraph') {
              return <p key={item.content} >{item.content}</p>
            } else if (item.type === 'link') 
            return <p key={item.content} ><a href="#">{item.content}</a></p>
          })
        }
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        name='comment'
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        /> 
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
             key={comment} 
             content={comment} 
             onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
