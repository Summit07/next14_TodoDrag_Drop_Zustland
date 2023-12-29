'use client'
import React from 'react'
import { Status, useTaskStore } from '@/lib/store'
import Task from './task'
import { useEffect, useMemo } from 'react'

export default function Column({
  title,
  status
}: {
  title: string
  status: Status
}) {
  const tasks = useTaskStore(state => state.tasks)

  const filteredTasks = useMemo(
    () => tasks.filter(task => task.status === status),
    [tasks, status]
  )

  const updateTask = useTaskStore(state => state.updateTask)
  const updateDrag = useTaskStore(state => state.updateDrag)
  const dragTask = useTaskStore(state => state.dragTask)

  const draggedTask = useTaskStore(state => state.draggedTask)
  // updateTask: (id: string | null, title: string, description?: string) => void
  useEffect(() => {
    useTaskStore.persist.rehydrate()
  }, []) // this is used becoz there is no conflict between local storage data and data coming from the server side html

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return
    console.log(title, status, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
    updateDrag(draggedTask, status)
    dragTask(null)
  }

  return (
    <section className='min-h-screen flex-1 mt-8'>
      <h2 className='ml-1 font-serif text-2xl font-semibold flex justify-center items-center bg-clip-text text-transparent bg-gradient-to-tr  from-green-500 from-40%  to-amber-500 to-60%'>{title}</h2>

      <div
        className='mt-3.5 h-full w-full rounded-xl bg-gray-700/50 p-4'
        onDrop={handleDrop}
        onDragOver={e => e.preventDefault()}
      >
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}

          {filteredTasks.length === 0 && status === 'TODO' && (
            <div className='mt-8 text-center text-sm text-gray-500'>
              <p>Create a new task</p>
            </div>
          )}

          {tasks.length && filteredTasks.length === 0 && status !== 'TODO' ? (
            <div className='mt-8 text-center text-sm text-gray-500'>
              <p>Drag your tasks here</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
