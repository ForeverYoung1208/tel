import React from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
	const card = props.card
	return(
		<div className="row card">
			<div className = "col-sm-12" >

{/*
				<div className="row"> <span className="col-sm-1 text-sm-right i-label text-nowrap"> id: </span> <span className="col-sm-auto">{ card.id }</span> </div>
				<div className="row"> <span className="col-sm-1 text-sm-right i-label text-nowrap"> Тип: </span> <span className="col-sm-auto">{ card.type }</span> </div>
*/}

				<div className="row"> <span className="col-sm-2 text-sm-right i-label text-nowrap"> Имя: </span> <span className="col-sm-auto">{ card.name }</span> </div>
				<div className="row"> <span className="col-sm-2 text-sm-right i-label text-nowrap"> Телефон: </span> <span className="col-sm-auto">{ card.tel }</span> </div>
				<div className="row"> <span className="col-sm-2 text-sm-right i-label text-nowrap"> Внутр.Тел.: </span> <span className="col-sm-auto">{ card.short_tel }</span> </div>
				<div className="row"> <span className="col-sm-2 text-sm-right i-label text-nowrap"> E-mail: </span> <span className="col-sm-auto">{ card.email }</span> </div>
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
