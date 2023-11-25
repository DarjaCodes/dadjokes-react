import './style.css';
import { useState, useEffect } from 'react';
import { Jokes } from '../../components/Jokes/jokes';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      console.log(data.result);
      setJokes(data.result);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {jokes.map((j) => (
        <Jokes
          key={j.id}
          id={j.id}
          userAvatar={j.avatar}
          name={j.name}
          text={j.text}
          likes={j.likes}
          dislikes={j.dislikes}
        />
      ))}
    </div>
  );
};
