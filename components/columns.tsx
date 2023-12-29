import Column from './column'
import NewTodoDialog from './new-todo-dialog'
import Login from './login'

export default function Columns() {
  return (
    <div >
      <div className='flex items-center justify-around'>
        <NewTodoDialog />
        <Login />
      </div>
      <section className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 lg:mt-10'>
        <Column title='Todo' status='TODO' />
        <Column title='In Progress' status='IN_PROGRESS' />
        <Column title='Done' status='DONE' />
      </section>
    </div>
  )
}
