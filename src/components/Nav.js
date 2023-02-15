
import { Link } from "react-router-dom";
import  logo  from '../assets/kazaLogo.svg';
// 
export default function Nav() {
  const keyList = [1,2,3,4,5,6,7,8,9]
    const lists = [
      <Link key={ keyList[0].toString() } to="/">Home</Link>,
      <Link key={ keyList[1].toString() } to="/about">About</Link>
    ];
    const listItems = lists.map((list, index) =>
      <li key={ keyList[index].toString() }>
        {list}
      </li>
    );
  return (
    <header>
      <div className="logo">
        <img src={logo} alt='logo-kaza'/>
      </div>
      <nav>
        <ul>
            {listItems}
        </ul>
      </nav>
    </header>
  );
}
