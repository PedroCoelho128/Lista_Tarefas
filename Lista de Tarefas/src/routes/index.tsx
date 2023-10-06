import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/not-found'
import About from '../pages/about'
import Products from '../pages/tasks'
import Contacts from '../pages/contacts'


const router = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement:<NotFound />},
  {path: '/sobre', element: <About/>},
  {path: '/tarefas', element: <Products/>},
  {path: '/contatos', element: <Contacts/>},
])

export default router