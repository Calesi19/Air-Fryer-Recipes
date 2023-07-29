import './App.css'
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import logo from './assets/airfyer.png';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* Create a component that is a clickable image for each recipe. The banner is an image of the food and th
name of the recipe.When the banner is clicked, it should display the recipe details.You have to pass 
in an image url and the name of the recipe to the component. */


interface RecipeProps {
  recipe: {
    id: string;
    name: string;
    temperature: string;
    time: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    video: string;
  };
}

// A component that displays a recipe

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {

  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
  

  return (
    <div className="recipe-tile">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>Cook at {recipe.temperature} for {recipe.time} minutes</p>
      <button onClick={handleToggleDetails}>
        {showDetails ? 'See Less' : 'See More'}
      </button>

      {showDetails && (
        <div className="details">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={`${recipe.id}-ingredient-${index}`}>{ingredient}</li>
            ))}
          </ul>
          <h3>Process</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={`${recipe.id}-instruction-${index}`}>{instruction}</li>
            ))}
          </ol>
          <div className='recipe-buttons'>
          <a href={recipe.video}>
            <button>
              Watch Video
            </button>
          </a>
          <button onClick={handleToggleDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};



type RecipeType = {
  id: string;
  name: string;
  temperature: string;
  time: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  video: string;
};

// A function that returns a promise that resolves to displaying a list of recipes

const RecipeList: React.FC = () => {
    const [recipes, setRecipes] = useState<RecipeType[]>([]);
    
    useEffect(() => {
        const q = query(collection(db, 'recipes'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
        const recipes: RecipeType[] = [];
        snapshot.forEach((doc) => {
            recipes.push({ id: doc.id, ...doc.data() } as RecipeType);
        });
        setRecipes(recipes);
        });
        return () => {
        unsubscribe();
        };
    }, []);
    
    return (
        <div>
        {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
        ))}
        </div>
    );
}



// App that displays a list of recipes

function App() {
  return (
    <>
      <div id='header'>
        <h1>Recipes</h1>
        <div id='logo-background'>
        <img id='logo' src={logo} alt='Air Fryer Icon' />
        </div>
      </div>
      
      <RecipeList />
    </>
  )
}

export default App
