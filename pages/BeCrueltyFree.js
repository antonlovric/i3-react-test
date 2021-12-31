import Head from 'next/head';
import NavBar from '../src/components/NavigationBar/NavBar';
import NavLink from '../src/components/NavLink/NavLink';
import CrueltyFreeHero from '../src/components/CrueltyFreeHero/CrueltyFreeHero';
import ContributionSection from '../src/components/ContributionSection/ContributionSection';
import Contribution from '../src/components/Contribution/Contribution';
import firstContributionImage from '../public/environmentImage.png';
import secondContributionImage from '../public/animalsImage.png';
import thirdContributionImage from '../public/veganDishesImage.png';
import GenerateRecipeSection from '../src/components/GenerateRecipeSection/GenerateRecipeSection';
import axios from 'axios';

NavLink;
export default function BeCrueltyFree(props) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
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
      <h1 className='mainHeading'>
        Our Commitment to <span className='highlight'> #BeCrueltyFree</span>
      </h1>
      <CrueltyFreeHero></CrueltyFreeHero>
      <ContributionSection>
        <Contribution
          image={firstContributionImage}
          text='Take good care of the environment'
        ></Contribution>
        <Contribution
          image={secondContributionImage}
          text='Be kind to animals'
        ></Contribution>
        <Contribution
          image={thirdContributionImage}
          text='Add as many vegan dishes to your repertoire as you can'
        ></Contribution>
      </ContributionSection>
      <GenerateRecipeSection recipe={props.recipes[0]}></GenerateRecipeSection>
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    `
    https://api.spoonacular.com/recipes/random?number=1&tags=vegan&apiKey=7beae4a6e0c44455bbf4c2f88879769a`
  );
  const data = res.data;
  let recipe = data;
  return { props: recipe };
}
