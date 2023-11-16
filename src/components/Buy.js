import React from 'react'

class Buy extends React.Component {

	render() {
		return (
			<div>
				<input placeholder='счет'></input>
				<input placeholder='токен'></input>
				<input type="number" placeholder='сумма'></input>
				<button type='button'>Купить</button>
			</div>
		
		)
	}
}
export default Buy 