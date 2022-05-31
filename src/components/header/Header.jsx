import "./header.css"
import { faBed, faCar, faTaxi, faPlane, faPerson, faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <div className="header">
        <div className="headerConatiner">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of dsicounts? It's Genius.</h1>
            <p className="headerDesc">
                Get rewarded for your travel - unlock instant saving of 10% or more with a 
                free CredexBooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" placeholder="Where are you going"  className="headerSearchInput"/>   
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText">date to date</span>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span className="headerSearchText">2 adults 2children 1 room</span>
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header