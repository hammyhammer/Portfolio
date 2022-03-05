import Layout from "../../components/Layout/Layout";
import aboutcss from "./AboutMe.module.css";
import me from '../../assets/images/me.png'
export default function AboutMe() {
  return (
    <Layout>
      <div className={aboutcss.whole}>
        <div className={aboutcss.header}>About me:</div>

        <div>
          Hampton is an aspiring software engineer. Located in the DC metro area,
        </div>
        <div className={aboutcss.image}>
          <img className={aboutcss.me} src={me} alt="Hampton" />
        </div>
        <div className={aboutcss.branding}>
          Through cooperation and initiative, Hampton is able to bring others together to complete a task. Working in team-based environments has made Hampton adaptable to situations, and working with others. When presented with a task, his persistence and meticulous work ethnic is unparalleled.
        </div>
        <div className={aboutcss.skills}>
          My current skill set: JavaScript | Ruby | CSS | HTML | SQL | React.js |Rails | MongoDB | Mongoose | Express | Node.js | Styled-Components CSS | Heroku | Netlify | Github
        </div>
        {/* <img src="https://imgur.com/EU2avVs" alt="" /> */}
      </div>
    </Layout>
  )
}
