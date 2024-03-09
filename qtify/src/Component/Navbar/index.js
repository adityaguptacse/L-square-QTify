import Button from '../Button'
import SearchBox from '../SearchBox'
import './Navbar.css'
import Logo from '../Logo'

export default function Navbar(){
    return(
        <div className="navbar">
            {/* <img src='logo.png' width={67} height={37} alt='logo'/> */}
            <Logo />
            <SearchBox />
            <Button>Give Feedback</Button>

        </div>
    )
}