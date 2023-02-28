import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
          title,
          description
        })

        setTitle("")
        setDescription("")
    }

  return (
      <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-10 rounded-md">
          <h1 className='text-2xl font-bold text-white mb-3 text-center'>Crea tu tarea</h1>
          <input placeholder="Escribe tu tarea" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
          />

          <textarea placeholder='Escribe la descripcion de la tarea'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          ></textarea>

          <button className='bg-indigo-500 font-bold px-3 py-1 text-white rounded-md hover:bg-white hover:text-indigo-500'>
              Guardar
          </button>
        </form>
      </div>
  )
}

