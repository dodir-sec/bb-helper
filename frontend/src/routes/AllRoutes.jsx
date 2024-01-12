import App from "../App";
import RouteError from "../components/RouteError";
import DomainTools from "../pages/DomainTools";
import Dorks from "../pages/Dorks";
import { Navigate } from 'react-router-dom';


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <Navigate to="/github-dorks" />,
      },
      {
        path: "/github-dorks",
        element: <Dorks />,
      },
      {
        path: "/google-dorks",
        element: <Dorks />,
      },
      {
        path: "/shodan-dorks",
        element: <Dorks />,
      },
      {
        path: "/domain-tools",
        element: <DomainTools />,
      },
    ]
  },
]


export { routes };
