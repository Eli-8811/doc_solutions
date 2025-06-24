import EmpleadoInsert from './EmpleadoInsert';
import EmpleadoActualizar from './EmpleadoActualizar';
import EmpleadoSelect from './EmpleadoSelect';
import EmpleadoDelete from './EmpleadoDelete';
import EmpleadoAll from './EmpleadoAll';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/registro" element={<EmpleadoInsert />} />
          <Route path="/actualizar" element={<EmpleadoActualizar />} />
          <Route path="/consultar" element={<EmpleadoSelect />} />
          <Route path="/eliminar" element={<EmpleadoDelete />} />
           <Route path="/todos" element={<EmpleadoAll />} />
        </Routes>
        <hr></hr>
        <Link className="App-link" to="/registro">Registro</Link>
        <hr></hr>
        <Link className="App-link" to="/actualizar">Actualizar</Link>
        <hr></hr>
        <Link className="App-link" to="/consultar">Consultar</Link>
        <hr></hr>
        <Link className="App-link" to="/eliminar">Eliminar</Link>
        <hr></hr>
        <Link className="App-link" to="/todos">Todos</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
