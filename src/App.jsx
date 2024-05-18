
import './App.css'
import Siderbar from './Components/Siderbar'

function App() {

  return (
    <>
      <h1 className=' font-bold text-2xl text-white text-center bg-green-950 py-2'>Drop-Down Menu</h1>

      <main className='main'>

        < Siderbar />

        <div className='container'>
          <h1 className='title '>My React App</h1>
          <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a nihil necessitatibus? Officia blanditiis voluptas suscipit nisi sint autem cupiditate! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium numquam possimus illum nam. Officiis sapiente iure pariatur molestiae facere!</p>
          <button className='btn'>Explore Now</button>
        </div>

      </main>
    </>
  )
}

export default App
