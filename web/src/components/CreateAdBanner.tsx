import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'
export function CreateAdBanner() {
  return (
    < div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8' >
      <div className='bg-[#2A2634] px-8 py-6  self-stretch rounded-b-lg flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>Nao encontrou seu Duo ?</strong>
          <span className='text-zinc-400'>Publique um anuncio para encontrar novos players</span>
        </div>
        <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white hover:bg-violet-600  rounded flex 
      items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar Anuncio
        </Dialog.Trigger>
      </div>
    </div >
  )
}