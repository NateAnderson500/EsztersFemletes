import {Link} from 'react-scroll'


export default function Navbar (){
    return (
        <div className="nav--container">
            <ul className="nav--items">
                <li className="nav--header">
                Eszter Kiss
                </li>
                <li className="nav--item">
                    <Link to="home"
                    smooth={true}
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