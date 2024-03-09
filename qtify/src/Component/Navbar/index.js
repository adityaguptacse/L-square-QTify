import Button from '../Button'
import SearchBox from '../SearchBox'
import './Navbar.css'

export default ()=>{
    return(
        <div className="navbar">
            <img src='logo.png' width={67} height={37}/>
            <SearchBox />
            <Button>Give Feedback</Button>

        </div>
    )
}