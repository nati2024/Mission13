import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container">
                    
                        <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to= "/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to= "/Podcast">Podcast</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to= "/Movies">Movies</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav;