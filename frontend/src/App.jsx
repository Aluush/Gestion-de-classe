import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import UserContext from "./context/UserContext.jsx";
function App() {
    return (
        <>
            <UserContext>
                <RouterProvider router={router}></RouterProvider>
            </UserContext>
        </>
    );
}

export default App;
