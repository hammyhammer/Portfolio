import iconscss from './Icons.module.css'

export default function Icons() {
  return (
    <div className="bg-blen">
      <span className="min-w-full pb-4 pt-8 flex justify-center text-5xl text-rose-700">Core skills</span>
      <div className="flex items-center">
        <div className="list_of_icons">
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" />
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3" />
          {/* <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss" /> */}
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="mongoDB" />
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5" />
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="gitHub" />
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="postgresql" />
          {/* <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap" /> */}
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="ruby" />
          <img className={iconscss.icons} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt="heroku" />
        </div>
      </div>
    </div>
  )

}