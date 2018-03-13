import React from 'react'


export class InputSearch extends React.Component {
	handleChange(e){
		const newValue=e.target.value;
		this.props.inputChanged(newValue)
	}

	render(){
		return(
			<div className="search row">
				<div className="input-group mb-3">
				  <div className="input-group-prepend">
				    <span className="input-group-text" id="basic-addon1">Cards search</span>
				  </div>
				  <input type="text" className="form-control" placeholder="search pattern" aria-label="Username" aria-describedby="basic-addon1"/>
				</div>				
			</div>		
		)
	}
}
