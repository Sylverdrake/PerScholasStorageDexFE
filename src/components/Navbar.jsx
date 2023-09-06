import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

//logo
import logo from '../assets/storagedexicon.png';
const Navbar = () =>
{
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const handleClick = () =>
    {
        logout()
    }

    return(
    <header>
        <div className="container">
            <Link to="/">
                <div><img className='logo' src={logo} alt='StorageDex'/></div><div id="motto">Storage, Simply</div>
            </Link>
            <nav>
                {user && ( 
                    <div>
                        <span>{user.username}</span>
                        <button onClick={handleClick}>Log Out</button>
                    </div>
                )}

                {!user && (
                <div className='userBtn'>
                    <Link to='/login'><strong>Log In</strong></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;|
                    <Link to='/signup'><strong>Sign Up</strong></Link>
                </div>
                )}
            </nav>
        </div>
    </header>
    )
}

export default Navbar