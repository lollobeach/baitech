import { useRoutes } from "react-router-dom";

import { AboutUs, Homepage, Rosalind } from "./element";
import Layout from "../components/Layout";

export default function Router() {

    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <Homepage />
                },
                {
                    path: '/rosalind',
                    element: <Rosalind />
                },
                {
                    path: '/about-us',
                    element: <AboutUs />
                }
            ]
        }
    ])
}