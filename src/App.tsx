import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";
import { routesApp } from './routes';
const App  : React.FunctionComponent = () =>{
  return(
    <BrowserRouter>
        <Routes>
          {routesApp.map((route) =>{
            const Component = route.component
            return <Route  key={route.href} path={route.href} element={<Component />} />
          })}
        </Routes>
    </BrowserRouter>
  )
}

export default App