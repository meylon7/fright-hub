import React,{useEffect} from 'react'
import Shipments from './components/shipments'
import ShippmentDetails from './components/ShippmentDetails'
import { useRoutes } from "hookrouter";
import NotFoundPage from './components/NotFoundPage'
import './App.css';

const routes = {
    '/': () => <Shipments />,
    '/shippmentprivew/:id': ({id}) => <ShippmentDetails id={id} />
};
function App() {
  const routeResult = useRoutes(routes);
  return (
    <React.Fragment>
      {routeResult || <NotFoundPage />}
    </React.Fragment>
  );
}

export default App;
