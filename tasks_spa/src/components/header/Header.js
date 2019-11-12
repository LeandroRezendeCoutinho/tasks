import React, { Component } from "reatc";
import NavBar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render(){
    return(
      <div>
        <NavBar>
          <NavBar.Brand>
            <FontAwesomeIcon icon="check-circle" size="lg"/> Task Finisher
          </NavBar.Brand>
        </NavBar>
      </div>
    )
  }
}

export default Header;