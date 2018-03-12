import React from 'react'
import PropTypes from 'prop-types'

export const UsefulLinks = (props) => {
	return(


		<ul className="container-fluid">
			<li className="row"> <div className="col-sm-auto input-group-text" >UsefulLinks:</div> </li>
			<li className="row useful-link"> 
				<div className="col-sm-auto" ><a href="/admin/cards">Cards management</a></div> 
			</li>

		</ul>

	)
}
