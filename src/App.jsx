import { useState, useEffect } from 'react';
import Card from './Card.jsx';

const App = () => {

  const [aliens, setAliens] = useState([]);

  useEffect(() => {
    fetch('react-alien-cards/data.json')
      .then((response) => {
        // If response is null, undefined, or not provided for some reason, the if (!response) block will execute.
        if (!response) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAliens(data);
      })
      .catch((error) => {
        console.error('Error fetching JSON!', error);
      });
  }, []);

  return (
    <div className="cards-container">
      {aliens.map((alien) => {
        return (
          <Card
          key={alien.id}
          alien={alien}
          />
        )
      })}
    </div>
  )
}

export default App
