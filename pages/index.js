import NavBar from '../src/components/NavigationBar/NavBar';
import NavLink from '../src/components/NavLink/NavLink';
import Hero from '../src/components/HeroSection/Hero';
import About from '../src/components/AboutSection/About';
import Head from 'next/head';
import Recipes from '../src/components/RecipesSection/Recipes';
import axios from 'axios';

export default function Home(props) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='reffered'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;600&family=Red+Hat+Text:wght@300;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header>
        <NavBar>
          <NavLink link='/#hero'>Home</NavLink>
          <NavLink link='/#about'>About</NavLink>
          <NavLink link='/#recipes'>Recipes</NavLink>
          <NavLink link='/BeCrueltyFree'>#BeCrueltyFree</NavLink>
        </NavBar>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Recipes information={props.information}></Recipes>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `
    https://api.spoonacular.com/recipes/random?number=5&apiKey=7beae4a6e0c44455bbf4c2f88879769a`
  );
  const data = res.data;
  let recipes = data.recipes;
  let information = data.recipes.map((recipe) => {
    let { title, image } = recipe;
    let newObject = { title, image };
    return newObject;
  });
  return { props: { information } };
}
