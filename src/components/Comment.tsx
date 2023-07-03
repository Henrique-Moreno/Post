import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  ondeleteComment: (comment: string) => void
}

export function Comment({content, ondeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    ondeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>

              <strong>Henrique Moreno</strong>

              <time title='06 de Maio às 13:13' dateTime="2023-06-06 13:13:30">Cerca de 1h atrás</time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title='Deletar comentario'
            >
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>

        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
