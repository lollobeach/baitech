import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<LoadingPage />}>
            <Component {...props} />
        </Suspense>
    )

export const Homepage = Loadable(lazy(() => import('../pages/Home')))
export const Rosalind = Loadable(lazy(() => import('../pages/Rosalind')))
export const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')))