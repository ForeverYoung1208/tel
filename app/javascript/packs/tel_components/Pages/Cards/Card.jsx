import React from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
	const card = props.card
	return(
		<div className="row card">
			<div className = "col-lg-8 col-sm-12" >
				<div className="row"> <span className="col-lg-1"> id: </span> <span>{ card.id }</span> </div>
				<div className="row"> <span className="col-lg-1"> type: </span> <span>{ card.type }</span> </div>
				<div className="row"> <span className="col-lg-1"> name: </span> <span>{ card.name }</span> </div>
				<div className="row"> <span className="col-lg-1"> tel: </span> <span>{ card.tel }</span> </div>
				<div className="row"> <span className="col-lg-1"> email: </span> <span>{ card.email }</span> </div>
			</div>
		</div>
	)
}

Card.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number,
	  type: PropTypes.string,
		name: PropTypes.string,
		tel: PropTypes.string,
		email: PropTypes.string
	})
}
