
import heroStyles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <>
      <div className="container">
        <h1 className={heroStyles.title}>CGR is a growing sales firm specialised in providing direct marketing solutions for the most ambitious companies in North America.</h1>
        <img className={heroStyles.hero_img} src="/img/img-hero.webp" />
        <div className={heroStyles.hero_body}>
          <h3 className={heroStyles.body_title}>TAKING YOUR PRODUCT TO NEW HEIGHTS.</h3>
          <p className={heroStyles.body_text}>Whether you are entering a new market or adding a product to your offerings, growing and reaching a new audience is an arduous task even for the best companies.</p>
          <p className={heroStyles.body_text}>Whether you are entering a new market or adding a product to your offerings, growing and reaching a new audience is an arduous task even for the best companies.</p>
        </div>
      </div>
    </>
  )
}

export default Hero;