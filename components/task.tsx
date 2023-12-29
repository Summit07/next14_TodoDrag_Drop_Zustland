import { Status, useTaskStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import UpdateTodo from './update-todo'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'


export default function Task({
  id,
  title,
  description,
  status
}: {
  id: string
  title: string
  description?: string
  status: Status
}) {
  const dragTask = useTaskStore(state => state.dragTask)
  const removeTask = useTaskStore(state => state.removeTask)
  const updateTask = useTaskStore(state => state.updateTask)

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const { title, description } = Object.fromEntries(formData)

    if (typeof title !== 'string' || typeof description !== 'string') return

    updateTask(id, title, description)

  }

  return (
    <div
      className={cn(
        'flex cursor-move items-start justify-between rounded-lg bg-white px-3 py-2 text-gray-900',
        {
          'border-2   border-teal-500 bg-gradient-to-l from-red-700 to-cyan-600': status === 'TODO',
          'border-2 border-green-500 bg-gradient-to-l from-amber-700 to-cyan-600': status === 'IN_PROGRESS',
          'border-2 border-blue-500 bg-gradient-to-l from-green-700 to-cyan-600': status === 'DONE'
        }
      )}
      onDragStart={() => dragTask(id)}
      draggable
    >
      <div>
        <h3 className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-white  to-amber-500'>{title}</h3>
        <p className='text-sm font-light text-gray-300'>{description}</p>
      </div>
      <div className='flex flex-col justify-around gap-4'>

        <button className='cursor-pointer' onClick={() => removeTask(id)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-5 w-5 text-gray-400 hover:text-gray-100'
          >
            <path
              fillRule='evenodd'
              d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
              clipRule='evenodd'
            />
          </svg>
        </button>


        <Dialog >
          <DialogTrigger asChild  >
            <button className='cursor-pointer text-gray-400 hover:text-gray-100'>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" ></path></svg>
            </button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Edit or Update Todo</DialogTitle>
              <DialogDescription>
                What do you want to get done today?
              </DialogDescription>
            </DialogHeader>
            <form
              id='todo-update'
              className='grid gap-4 py-4'
              onSubmit={handleUpdate}

            >
              <div className='grid grid-cols-4 items-center gap-4'>
                <Input
                  id='title'
                  name='title'
                  placeholder='Todo title...'
                  className='col-span-4'
                  required
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Textarea
                  id='description'
                  name='description'
                  placeholder='Description...'
                  className='col-span-4'
                />
              </div>
            </form>
            <DialogFooter>
              <DialogTrigger asChild>
                <Button type='submit' size='sm' form='todo-update'>
                  Add Todo
                </Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>

    </div>
  )
}
