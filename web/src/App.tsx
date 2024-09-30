import logo from './assets/logo-in-orbit.svg'
import letsStart from './assets/lets-start-illustration.svg'
import { Plus, X } from 'lucide-react'
import { Button } from './components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'

export function App() {
  return (
    <Dialog >
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit logo" />
        <img src={letsStart} alt='lets start' />
        <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
        </p>
        <DialogTrigger asChild>
          <Button >
            <Plus className='size-4' />
            Cadastrar meta
          </Button>
        </DialogTrigger>

      </div>
      <DialogContent>
       <div className='flex flex-col gap-6'>
       <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <DialogTitle>Criar meta</DialogTitle>
            <DialogClose>
              <X className='size-5 text-zinc-600' />
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que te fazem bem e que voce quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>
        <form action='' className='flex-1 flex flex-col justify-between'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Label>Qual a atividade?</Label>
              <Input placeholder='Praticar exercicio'/>
            </div>
            <div className='flex flex-col gap-2'>

            </div>
          </div>
          <div className='flex items-center gap-3'>
            <DialogClose asChild>
            <Button type='button' className='flex-1' variant='secondary'>Fechar</Button>
            </DialogClose>
            <Button className='flex-1'>Salvar</Button>
          </div>
        </form>
       </div>
      </DialogContent>
    </Dialog>
  )
}
