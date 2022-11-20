
import './App.css';

function App(props) {
  return (
    <div className="App container">
      <div className="container main-section">
       
        <h1 className='appName'><span className='logoLetter'>:D</span><span className='appTitle'>ictionary</span></h1>
   
       
            <i class="bi bi-search"></i>
            <form onSubmit={null}>
              <input type='search' 
              className='form-control'
              placeholder='search here' 
              autoFocus={true}
              onChange={null}/>
            </form>
   
      </div>
      <small>Created by Viktoriia Perehuda,
      <br />
      GitHub code
      </small>
    </div>
  );
}

export default App;
