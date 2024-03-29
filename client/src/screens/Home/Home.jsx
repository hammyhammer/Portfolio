import homecss from './Home.module.css';
import Layout from '../../components/Layout/Layout';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Projects from '../Projects/Projects';

export default function Home() {
  return (
    <Layout>
      <div className={homecss.home_body}>
        {/* <div className={homecss.welcome} id="home">
          Hampton Jacobs
        </div> */}
        {/* <div className={homecss.traits}><p className={homecss.driven}>Driven</p><p className={homecss.bullet}>{"\u2022"}</p><p className={homecss.creative}>Creative</p><p className={homecss.bullet}>{"\u2022"}</p><p className={homecss.software}>Software Developer</p> </div> */}
        <AboutMe />
        <Projects />

      </div>

    </Layout>
  )
}
