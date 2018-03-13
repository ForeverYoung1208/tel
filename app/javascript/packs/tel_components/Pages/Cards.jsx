import React from 'react'
import { Card } from './Cards/Card'
import { InputSearch } from './Cards/InputSearch'

export class Cards extends React.Component {
	constructor(props){
	 	super(props);
		this.state = {
			cards: [],
			searchPattern:''
		},
		this.inputTimer = null;
	};

	getCardsByPattern = (pattern) =>{
		let url = 'api/cards/index.json?'+ $.param({searchPattern: pattern})
		console.log(url)
		// const token = $('meta[name="csrf-token"]').attr('content');
		const myHeaders = new Headers({
			// 'X-CSRF-Token': token,
			'Content-Type': 'application/json'
		});
		// const payload = {
		// 	greeting:{ 
		// 		'text': text
		// 	}
		// }
		fetch(
			url,
			{
				method: 'GET',
				headers: myHeaders
				// body: JSON.stringify(payload),
				// credentials: "same-origin"
			})
			.then( res => {
				return res.json()
			})
			.then( resj => {
				console.log( resj )
				this.setState({cards: resj})
			}
		)
	}

	componentDidMount = () => {
		// this.getCardsByPattern(this.state.searchPattern)

	}

	inputChanged = (val) => {
		this.setState( {searchPattern: val})

		if (val.length>=3) {

			clearTimeout(this.inputTimer)
			this.inputTimer = setTimeout( () => {
				this.getCardsByPattern(this.state.searchPattern)
			}, 500);
		
		} else {
			clearTimeout(this.inputTimer)
			this.setState({cards: []})
		}

	}


	render(){
		return(

			<div className="container-fluid">

				<InputSearch inputChanged={this.inputChanged} searchPattern={this.state.searchPattern}/>

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

