import footercss from './Footer.module.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <div className={footercss.footer}>
      <a href="https://github.com/hammyhammer" target="_blank" rel="noreferrer noopener">
        <p className={footercss.git}> <BsGithub size={24} /></p>
        {/* <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" alt="Github Icon"
          className={footercss.git} /> */}
      </a>
      <a href="https://www.linkedin.com/in/hampton-jacobs/" target="_blank" rel="noreferrer noopener">
        <p className={footercss.link}><BsLinkedin size={24} /></p>
        {/* <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png" alt="Linkedln Icon" */}
        {/* className={footercss.link} /> */}
      </a>
    </div>
  )
}
