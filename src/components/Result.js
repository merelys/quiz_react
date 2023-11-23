import './Button.css';
import styles from './Result.module.css';

function Result({ correctAnswers, numberOfQuestion }) {
  return (
    <div className={styles.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You guessed {correctAnswers} answers out of {numberOfQuestion}
      </h2>
      <a href="/">
        <button className="button">Reset</button>
      </a>
    </div>
  );
}

export default Result;
