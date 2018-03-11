import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Cards } from './Pages/Cards'
import { UsefulLinks } from './Pages/UsefulLinks'


export default class Pages extends React.Component {
	render(){
		return(
			<main>	
				<Switch>
					<Route path='/cards' component={Cards}/>
					<Route path='/useful_links' render={ () => <UsefulLinks/> }/>
				</Switch>
			</main>

		)
	}
}

