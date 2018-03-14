import React from 'react'
import PropTypes from 'prop-types'

export class InputSearch extends React.Component {
	handleInputChange = (e) => {
		const newValue=e.target.value;
		this.props.inputChanged(newValue)
	}

	render(){
		return(
			<div className="search row">
				<div className="input-group mb-3">
				  <div className="input-group-prepend">
				    <span className="input-group-text" id="basic-addon1">Поиск :</span>
				  </div>
				  <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="минимум 4 символа для поиска"
				  	value={this.props.searchPattern} onChange={this.handleInputChange}
				  />
				</div>				
			</div>		
		)
	}

}

InputSearch.propTypes = {
	inputChanged: PropTypes.func.isRequired,
	searchPattern: PropTypes.string
}
