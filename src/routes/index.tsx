import { createFileRoute, useNavigate } from '@tanstack/react-router'
import europeanaLogo from '../europeana.jpg'
import linkedInLogo from '../linkedin.svg'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const navigate = useNavigate();

  const navigateToLinkedIn = () => {
    navigate({ href: "https://www.linkedin.com/in/hugues-soares" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-row justify-between mx-16 mt-8 pb-8">
        <h1 className="text-4xl font-semibold">hezino</h1>
          <img
            src={linkedInLogo}
            className="h-8 cursor-pointer"
            onClick={navigateToLinkedIn}
            alt="Europeana"
          />
      </header>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <main className="flex-1 flex flex-col gap-16 m-16 justify-center items-center sm:flex-row">  
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h2 className="text-2xl font-medium text-center">
            Applications web et mobile sur mesure.
          </h2>

          <button className="w-48 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Contactez-nous!
          </button>
        </div>
        <img
          src={europeanaLogo}
          className="sm:h-[40vmin] pointer-events-none"
          alt="Europeana"
        />
      </main>

      <footer className="flex justify-center pb-8">
        <div>hezino 2025.</div>
      </footer>
    </div>
  )
}
