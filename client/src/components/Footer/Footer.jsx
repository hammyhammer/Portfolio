import footercss from './Footer.module.css'

export default function Footer() {
  return (
    <div className={footercss.footer}>
      <a href="https://github.com/hammyhammer">
        <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png" alt="Github Icon"
          className={footercss.git} />
      </a>
      <a href="https://www.linkedin.com/in/hampton-jacobs/">
        <img src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png" alt="Linkedln Icon"
          className={footercss.link} />
      </a>
    </div>
  )
}
