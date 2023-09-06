import {Link} from 'react-router-dom'
const Navbar = () =>
{
    return(
        <div className="container">
            <Link to="/">
                <h1>StorageDex</h1>
            </Link>
            <nav>
                <div><Link to='/login'>Login</Link></div>
                <div><Link to='/signup'>Sign Up</Link></div>
            </nav>
        </div>
    )
}

export default Navbar