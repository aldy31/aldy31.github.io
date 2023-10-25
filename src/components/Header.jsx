import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import { setGlobalState } from '../store'


const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="flex justify-between items-center
        p-5 bg-white shadow-lg fixed top-0 left-0 right-0"
    >
      <nav class= "flex justify-start space-x-4" > 
      <Link 
        to="/"
        className="flex items-center
      text-xl text-black space-x-1" >
        <span>Home</span>
      </Link>
      
      <Link
        to="/"
        className="flex items-center space-x-1 text-xl text-black" onClick={() => setGlobalState('createModal', 'scale-100')} >
        <span>Buka Donasi</span>
      </Link>

      {/* <Link 
        to="/"
        className="flex items-center
      text-xl text-black space-x-1" >
        <span>Profile</span>
      </Link> */} 
      
      </nav>
    
  

      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-blue-700"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-blue-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
