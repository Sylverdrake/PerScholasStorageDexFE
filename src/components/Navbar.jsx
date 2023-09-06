import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
const Navbar = () =>
{
    const {logout} = useLogout();
    const handleClick = () =>
    {
        logout()
    }

    return(
        <div className="container">
            <Link to="/">
                <h1>StorageDex</h1>
            </Link>
            <div>
                <button onClick={handleClick}>Log Out</button>
            </div>
            <nav>
                <div><Link to='/login'>Login</Link></div>
                <div><Link to='/signup'>Sign Up</Link></div>
            </nav>
        </div>
    )
}

export default Navbar