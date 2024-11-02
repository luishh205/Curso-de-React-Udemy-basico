//component//
import TemplateExpressions from './Components/TemplateExpressions.js';
import FistComponent from './Components/FistComponent.js';
import MyComponent from './Components/MyComponent.js';
import Events from './Components/Events.js';
//styles/css
import './App.css';
import Challenge from './Components/Challenge.js';

function App() {
  return (
    <div className="App">
      
     <h1>Hello</h1>
     <p>Novo texto adicionado aqui</p>
     <FistComponent/>
     <TemplateExpressions/>
     <MyComponent/>
     <Events/>
     <Challenge/>
    </div>
  );
}

export default App;
 