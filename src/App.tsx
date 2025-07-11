import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Suspense } from "react"
import { HttpMethodContextProvider } from "@/context/HttpMethodProvider"
import { UserProvider } from "@/context/UserProvider"
import { appRoutes } from "@/pages/routes"

const router = createBrowserRouter(appRoutes)

function App() {
  return (
    <HttpMethodContextProvider>
      <UserProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </UserProvider>
    </HttpMethodContextProvider>
  )
}

export default App
