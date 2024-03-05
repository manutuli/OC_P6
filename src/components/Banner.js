
import { Outlet, NavLink, useParams } from "react-router-dom";
import  logo  from '../assets/kazaLogo.svg';
// 
export default function Banner() {
  let {params} = useParams();
  const keyList = [1,2,3,4,5,6,7,8,9]
    const lists = [
      // navlink 
      <NavLink 
        key={ keyList[0].toString() } 
        to="/"
        className={({isActive, isPending }) => 
          isPending ? "pending" : isActive ? "active" : ""
        }
        >ACCUEIL
      </NavLink>,
      <NavLink 
        key={ keyList[1].toString() } 
        to="/about"
        className={({isActive, isPending }) => 
          isPending ? "pending" : isActive ? "active" : ""
        }
        >À PROPOS
      </NavLink>
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