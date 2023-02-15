
import Footer from "../components/Footer";
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
      <div className="text-small">{text.small}</div>
      <Footer/>
    </div>
  )
}
