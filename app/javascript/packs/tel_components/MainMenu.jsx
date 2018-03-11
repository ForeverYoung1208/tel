import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export default class MainMenu extends React.Component {
	render(){
		return(	
			<div className="container-fluid">
				<nav className="navbar navbar-expand-sm navbar-light bg-faded">
				  <div className="navbar-brand" to="/cards">ITell:</div>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item">
				        <NavLink className="nav-link" activeClassName='i-active' to="/cards">Show contacts</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink className="nav-link" activeClassName='i-active' to="/useful_links">Useful links</NavLink>
			      </li>
				    </ul>
				  </div>
				</nav>
			</div>
		)
	}
}