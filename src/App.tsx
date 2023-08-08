
import { Outlet } from 'react-router-dom';
import './App.css'


function App() {
 

  return (
    <>
      <div className="header">{/* Header */}</div>

      {/* main  */}
      <div className="main">
        <Outlet></Outlet>
      </div>

      {/* Footer */}

      <div className="Footer">
        
      </div>


    </>
  );
}

export default App
