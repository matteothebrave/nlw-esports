import { useState, useEffect } from 'react'
import './styles/main.css'
import logoImg from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import * as Dialog from '@radix-ui/react-dialog'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>Duo</span> está aqui
      </h1>
      {/* THIS IS THE GAME's CARD DIV */}
      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      {/* THIS IS THE " FOOTER DIV "  / Now a component */}
      <Dialog.Root>
        
        <CreateAdBanner />
      </Dialog.Root>
    </div >
  )
}

export default App




  // DIEGO FERNANDES EXPLANATION OF USESTATE (Min 22 Stage 4)
  // Function = useState = Change visual things on code
  // const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false)
  // function handleButtonClick(){
  //  setHasUserClickedOnButton(true);
  // }

// The function is executed here \/
// <button onClick={handeButtonClick}> Clique aqui </button>
//  THIS IS AN IF / ELSE (CONDITION)
// { hasUserClickedOnButton ? 'Usuario Clicou' : null }

// useEffect(() => {
//  console.log(hasUserClickedOnButton)
//}, [hasUserClickedOnButton])
// function handleButtonClick() {  // THIS IS A TOGGLE MODE \/
//  setHasUserClickedOnButton(!hasUserClickedOnButton)/
// }