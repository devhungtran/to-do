import Home from "../pages";



interface Route {
    href: string;
    component: React.FC;
  }

export const routesApp : Array<Route> = [
    {
        href: "/",
        component: Home
    }
]
