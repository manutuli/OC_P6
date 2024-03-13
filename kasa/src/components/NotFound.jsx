
import { Link, Outlet, useRouteError } from "react-router-dom";
//
export default function NotFound() {
  let error = useRouteError()
  console.log(error)
  const text = {
    big: "404",
    medium: "Oups! La page que vous demandez n'existe pas.",
    small: "Retourner sur la page d’accueil",
  };
  error = {
    message : 
    <div className="notfound content navigation">
    <div className="text-big">{text.big}</div>
    <div className="text-medium">{text.medium}</div>
    <Link to={"/"}>
      <div className="text-small">{text.small}</div>
    </Link>
  </div>
  }
  return (
    <>{error.message}
      <Outlet/>  
    </>
  );
}
