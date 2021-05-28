import './App.css';
import {Recept} from "./components/Recept";
import {useEffect, useState} from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
    const APP_ID = 'a52cba2c'
    const APP_KEY= '57661d98cbab6f9cbc19da7f35af1dbe'
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chiken')

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)

    }
    const updateSearch = (e) => {
        setSearch(e.target.value)

    }

    useEffect(  ()=> {
        getRecipes()
    }, [query])

    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }


  return (
    <div className="App">
        <header>
            <p>Let's cooocking</p>
            <a href='#'><GitHubIcon /></a>
        </header>
        <form onSubmit={getSearch} className='search-form'>
            <input className='search-bar' value={search} onChange={updateSearch} type='text'/>
        </form>
        <div className="coocking">

        {
            recipes.length === 0 ? (
                <h1 className='no-found'>Пока пусто</h1>
            ) :(
                recipes.map(recipe=> (
                    <Recept  ingredients={recipe.recipe.ingredients}
                             callories={recipe.recipe.calories}
                             title={recipe.recipe.label}
                             key={recipe.recipe.calories}
                             img ={recipe.recipe.image} />
                ))
            )
        }
        </div>
    </div>
  );
}

export default App;
