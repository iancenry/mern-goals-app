import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route />
    </Route>
  )
)

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
