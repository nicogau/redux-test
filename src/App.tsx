import reactLogo from './assets/react.svg'
import './App.css'
import {useAppDispatch, useAppSelector} from './hooks'
import {increment, incrementByAmount, selectCount} from './features/counter/counterSlice'

  
  

const  App = () => {
    // get the counter state
    const {value} = useAppSelector( store => store.counter)
    const dispatch = useAppDispatch() 

    const handleClick = () => {
       // console.log(dispatch) 
       dispatch(incrementByAmount(5))
     }
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
