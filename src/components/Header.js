import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { AiFillRedditCircle } from "react-icons/ai";

class Header extends React.Component{
	render(){
		return(
			<header className="header">
				<div className="icon1">
					<AiFillRedditCircle className='edit-icon'/>
				</div>
				<h3>Ira</h3>
				<button type='button'>Добавить сеть</button>
			</header>
		)
	}
}
export default Header