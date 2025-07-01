import { createFileRoute, useNavigate } from '@tanstack/react-router'
import europeanaLogo from '../europeana.jpg'
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
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-row justify-between mx-16 mt-8 pb-8">
        <h1 className="text-4xl">hezino</h1>
          <img
            src={linkedInLogo}
            className="h-8 cursor-pointer"
            onClick={navigateToLinkedIn}
            alt="Europeana"
          />
      </header>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <main className='flex flex-row justify-center items-center gap-24 flex-1'>  
        <div>
          Developing your app whatever the requirements.
        </div>
        <img
          src={europeanaLogo}
          className="h-[40vmin] pointer-events-none"
          alt="Europeana"
        />
      </main>

      <footer className="flex justify-center pb-8">
        <div>hezino 2025.</div>
      </footer>
    </div>
  )
}
