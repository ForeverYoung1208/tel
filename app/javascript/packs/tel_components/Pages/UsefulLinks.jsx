import React from 'react'
import PropTypes from 'prop-types'

export const UsefulLinks = (props) => {
	return(
		<div>
		<h3><div className="col-sm-auto input-group-text" >Полезные ссылки:</div> </h3>
		<ul className="container-fluid">
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://csd.ua/index.php">https://csd.ua/index.php</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://www.nssmc.gov.ua/">https://www.nssmc.gov.ua/</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://www.pard.ua/">https://www.pard.ua/</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://stockmarket.gov.ua/">https://stockmarket.gov.ua/</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://smida.gov.ua/">https://smida.gov.ua/</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://usr.minjust.gov.ua/ua/freesearch">https://usr.minjust.gov.ua/ua/freesearch</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="http://reyestr.court.gov.ua/">http://reyestr.court.gov.ua/</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://www.sdfm.gov.ua/">https://www.sdfm.gov.ua/</a></div> </li>
			<li className="row useful-link"> <div className="col-sm-auto" > <a target="_blank" href="https://zakon.rada.gov.ua/laws">https://zakon.rada.gov.ua/laws</a></div> </li>
		</ul>
		</div>
	)
}
