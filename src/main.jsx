import { createRoot } from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import  { appRouter } from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>

)
