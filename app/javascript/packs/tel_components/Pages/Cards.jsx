import React from 'react'
import { Card } from './Cards/Card'

export class Cards extends React.Component {
	constructor(props){
	 	super(props);
		this.state = {
			cards: [{
					id: 1,
					type: "type1",
					name: "name1",
					tel: "tel1",
					email: "email1"
				},
				{
					id: 2,
					type: "type2",
					name: "name2",
					tel: "tel2",
					email: "email2"
				}
			]
		}
	};

	render(){
		return(
			<div className="container-fluid">
				<div className="search row">
					<input/>
				</div>

				<div className="cards ">
					{ this.state.cards.map( (card, index) => (
								<Card key={card.id} card={card}/>
							)
						)
					}
				</div>
				
			</div>

		)
	}
}

