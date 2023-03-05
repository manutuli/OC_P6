
import { useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import  logo  from '../assets/kazaLogo.svg';
// 
export default function Banner() {
  let {params} = useParams();
  const keyList = [1,2,3,4,5,6,7,8,9]
    const lists = [
      <Link key={ keyList[0].toString() } to="/">ACCUEIL</Link>,
      <Link key={ keyList[1].toString() } to="/about">À PROPOS</Link>
    ];
    const listItems = lists.map((list, index) =>
      <div className="navigation" key={ keyList[index].toString() }>
        {list}
      </div>
    );
  return (
    <>
    <header>
      <div className="banner--logo">
        <img src={logo} alt='logo-kasa'/>
      </div>
      <nav>
        <div className="banner--list" >
            {listItems}
        </div>
      </nav>
    </header>
    <Outlet params={params} />
    </>
  );
}