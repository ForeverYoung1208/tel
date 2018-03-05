import React from 'react'
import { Switch, Route } from 'react-router-dom';


const Cards = (props) => {
	return(
		<div>
			-Cards-here-
		</div>
	)
}

const Links = (props) => {
	return(
		<div>
			-Links-here-
		</div>
	)
}

export default class Pages extends React.Component {
	render(){
		return(
			<main>	
				<Switch>
					<Route path='/cards' component={Cards}/>
					<Route path='/links' render={ () => <Links/> }/>
				</Switch>
			</main>

		)
	}
}

