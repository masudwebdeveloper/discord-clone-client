import { createBrowserRouter } from  "react-router-dom";
import Main from "../../layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: 'channels',
        element: <></>
    }
])

export default router;