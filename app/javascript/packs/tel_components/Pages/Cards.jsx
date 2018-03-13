import React from 'react'
import { Card } from './Cards/Card'
import { InputSearch } from './Cards/InputSearch'

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
			],
			searchPattern:''
		}
	};

	inputChanged = (val) => {

	}


	render(){
		return(

			<div className="container-fluid">

				<InputSearch inputChanged={this.inputChanged}/>

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

