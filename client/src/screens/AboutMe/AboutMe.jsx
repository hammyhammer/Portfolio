import Layout from "../../components/Layout/Layout";
import aboutcss from "./AboutMe.module.css";
import me from '../../assets/images/me.png'
export default function AboutMe() {
  return (
    <div className={aboutcss.whole} id="about-me">
      <div className={aboutcss.header}>About me:</div>
      <img className={aboutcss.me} src={me} alt="Hampton" />
      <div className={aboutcss.branding}>
        I am a software enginner located in the DC metro area. With a background in athletic development,
        I thrive in team based environments were cooperation and communication is
        imperative. Likewise, after coaching with young athletes, I have come to love
        and appreicate the process of reaching a common goal.
      </div>
      <div className={aboutcss.intro_skills}>My current skill set: </div>
      <div className={aboutcss.skills}>
        JavaScript | Ruby | CSS | HTML | SQL | React.js | Rails | MongoDB | Mongoose | Express | Node.js | Styled-Components CSS | Heroku | Netlify | Github
      </div>
      {/* <img src="https://imgur.com/EU2avVs" alt="" /> */}
    </div >
  )
}
