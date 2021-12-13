import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      const newHistory = [...history];
      newHistory.pop();

      // creates new history array with the newMode
      setHistory((prevHistory) => [...newHistory, newMode]);
      // sets current mode
      setMode(newMode);
    } else {
      setHistory((prevHistory) => [...prevHistory, newMode]);
      setMode(newMode);
    }
  };

  const back = () => {
    if (mode === initial) {
      return;
    }

    if (history.length > 1) {
      setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));

      setMode(history[history.length - 2]);
    }
  };

  return { mode, transition, back };
}
