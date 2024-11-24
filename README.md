You have two main options to use the images specified in the data.json file. Both approaches work depending on your project setup and preferences:

Option 1: Use URLs Directly From data.json
If the image property in your JSON points to valid URLs (e.g., /images/alien-1.png), you can use them directly in the src attribute of the <img> tag. This approach is simple and avoids the need to manually import images.

Steps:
1. Ensure the images are stored in the public folder of your project (e.g., public/images/alien-1.png).
2. Use the image property from the data.json file in the src of the <img> element.

Advantages:
- No need to import images manually in the component.
- Easier to update or extend the data.json file in the future.

Considerations:
- Make sure your images are accessible in the public folder or hosted on a valid server.

Option 2: Import Images and Use Imports in the data.json
If you want to import the images as assets within your React component, you need to replace the image property in the data.json file with imports or map them to the appropriate file paths.

Approach:
Replace the image values in the data.json with a placeholder like "alien-1.png".
Use require or import to load these images dynamically.

Importing and Using the Images in the Component:

import alien1 from './images/alien-1.png';
import alien2 from './images/alien-2.png';
import alien3 from './images/alien-3.png';

const App = () => {
  const [aliens, setAliens] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Map images dynamically
        const updatedData = data.map((alien) => {
          let image;
          switch (alien.image) {
            case 'alien-1.png': image = alien1; break;
            case 'alien-2.png': image = alien2; break;
            case 'alien-3.png': image = alien3; break;
            default: image = null;
          }
          return { ...alien, image };
        });
        setAliens(updatedData);
      });
  }, []);

  return (
    <div className="cards-container">
      {aliens.map((alien) => (
        <div className="card" key={alien.id}>
          <img src={alien.image} alt={alien.name} />
          <p>{alien.name}</p>
          <p>{alien.race}</p>
          <p>{alien.age}</p>
          <p>{alien.gender}</p>
        </div>
      ))}
    </div>
  );
};

Advantages:
- Images are bundled with the app, ensuring they are included in the build.
- Useful for projects where dynamic paths aren't feasible.

Considerations:
- Slightly more manual effort, especially as the number of images grows.
- Bundle size increases as images are included in the JavaScript bundle.

Recommendation
- Use Option 1 if your images are static and stored in the public folder or a remote server.
- Use Option 2 if you want the images to be part of the React build process or need stricter asset management.


PASSING PROPS
Properly Destructure Props in Card.jsx
Instead of treating alien as the entire props object, destructure it like this:
When you pass alien={alien} in the App.jsx file, alien becomes a property of the props object in the Card component.
Without destructuring, the alien argument in Card would contain the entire props object, and properties like alien.id, alien.name, etc., would be undefined.

Значи кога родителот подава објект на чајлдот, чајдлот како аргумент го прима и го деструктурира тој објект за да може да му ги пристапи пропертите. Alien објектот се наоѓа во Props објектот и ради тоа треба првин да го „извлечеме“ од тој Props објект.