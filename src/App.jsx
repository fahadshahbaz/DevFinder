import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import UserDisplay from './Components/userDisplay'

function App() {
  return (
    <div className='flex justify-center items-center flex-col mx-auto'>
    <Navbar />
    <SearchBar />
    <UserDisplay />
    </div>
  )
}

export default App
