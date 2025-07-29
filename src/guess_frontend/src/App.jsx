import { useState, useEffect } from 'react';
import { guess_backend } from 'declarations/guess_backend';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import "./style/App.css";

function App() {
  const [win, setWin] = useState(false);
  const [played, setPlayed] = useState(false);
  const [secret, setSecret] = useState(0);
  const [width, height] = useWindowSize(); 

  async function handleSubmit(formData) {
    const number = formData.get("number");
    const returned = await guess_backend.play(number);

    setWin(returned[0]);
    setSecret(returned[1]);
    setPlayed(true);
  }

  return (
    <>
      <h1>Welcome To Guessing Game</h1>
      <div>The guessing range is from 1 to 20</div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          await handleSubmit(formData);
          e.target.reset();
        }}
      >
        <label htmlFor="number">Enter your number: &nbsp;</label>
        <input id="number" name="number" type="number" placeholder="0" />
        <button type="submit">Click Me!</button>
      </form>

      {played && !win && (
        <>
          <div>The secret number was: {secret}</div>
          <div className="played-lose">You Lost</div>
        </>
      )}

      {played && win && (
        <>
          <div className="played-win">You Guessed Right!!</div>
          <Confetti width={width} height={height} />
        </>
      )}
    </>
  );
}

export default App;
