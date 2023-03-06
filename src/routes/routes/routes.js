import { createBrowserRouter } from  "react-router-dom";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: 'channels',
        element: <Home></Home>
    }
])

export default router;