import { createFileRoute, useNavigate } from '@tanstack/react-router'
import logo from '../europeana.jpg'
import linkedInLogo from '../linkedin.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const navigate = useNavigate();


  const navigateToLinkedIn = () => {
    navigate({ href: "https://www.linkedin.com/in/hugues-soares" });
  };

  return (
    <div className="h-full min-h-screen flex flex-col px-24 py-12">
      <header className="flex flex-row justify-between">
        <h1>hezino</h1>
        <nav>
          <ul>
            <li className="cursor-pointer">
              <img
                src={linkedInLogo}
                className="h-8"
                onClick={navigateToLinkedIn}
                alt="Europeana"
              />
            </li>
          </ul>
        </nav>
      </header>
      <main className='flex flex-row justify-center items-center flex-1 gap-24'>  
        <div>
          Developing your app whatever the requirements.
        </div>
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none"
          alt="Europeana"
        />
      </main>

      <footer className="flex justify-center">
        <div>hezino 2025.</div>
      </footer>
    </div>
  )
}
