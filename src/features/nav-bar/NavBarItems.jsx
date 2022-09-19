import { createBrowserRouter } from 'react-router-dom';

createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "About me",
                element
            }
        ]
    }
])