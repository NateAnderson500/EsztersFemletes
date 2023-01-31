import {Link} from 'react-scroll'


export default function Navbar (){
    return (
        <div className="nav--container">
            <h3 className="nav--header">Eszter Kiss</h3>
            <ul className="nav--items">
                <li className="nav--item">
                    <Link to="home"
                    smooth={true}
                    offset={-75}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav--item">
                    <Link to="about"
                    smooth={true}
                    offset={-75}
                    >
                        About
                    </Link>
                </li>
                <li className="nav--item">
                    <Link to="event-results"
                    smooth={true}
                    offset={-75}
                    >
                        Event Results
                    </Link>
                </li>
                <li className="nav--item">
                    <Link to="contact"
                    smooth={true}
                    offset={-75}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}