import footercss from './Footer.module.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <div className={footercss.footer}>
      <a href="https://github.com/hammyhammer" target="_blank" rel="noreferrer noopener">
        <p className={footercss.git}> <BsGithub size={24} /></p>
      </a>
      <a href="https://www.linkedin.com/in/hampton-jacobs/" target="_blank" rel="noreferrer noopener">
        <p className={footercss.link}><BsLinkedin size={24} /></p>
      </a>
    </div>
  )
}
