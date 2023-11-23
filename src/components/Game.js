import './Button.css';
import styles from './Game.module.css';

function Game({ question, selectAnswer, percentTage }) {
  return (
    <div className={styles.game}>
      <div className={styles.progress}>
        <div
          style={{ width: `${percentTage}%` }}
          className={styles.progressInner}
        ></div>
      </div>
      <h1>{question.title}</h1>
      <div className={styles.answers}>
        {question.variants.map((text, index) => (
          <div
            className="button"
            onClick={() => selectAnswer(index)}
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
