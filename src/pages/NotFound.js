
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// 
export default function NotFound () {
  const text = {
    big : "404",
    medium : "Oups! La page que vous demandez n'existe pas.",
    small : "Retourner sur la page d’accueil"
  }
  return (
    <div className="notfound">
      <div className="text-big">{text.big}</div>
      <div className="text-medium">{text.medium}</div>
      <Link to={'/home'}>
        <div className="text-small">{text.small}</div>
      </Link>
      <Footer/>
    </div>
  )
}
