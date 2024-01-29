import {
    createBrowserRouter
} from "react-router-dom";
import { NotFound } from "../pages";
import App from '../App'
import {
    Main,
    Categories,
    Items,
    Basket,
    Sale,
    Item
} from '../pages';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
        children: [
            {
                path: '',
                element: <Main />,
            },
            {
                path: '/categories/:id',
                element: <Items />,
            },
            {
                path: '/categories',
                element: <Categories />,
            },
            {
                path: '/items/:id',
                element: <Item />,
            },
            {
                path: '/items',
                element: <Items />,
            },
            {
                path: '/basket',
                element: <Basket />,
            },
            {
                path: '/sales',
                element: <Sale />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ]}

  ]);