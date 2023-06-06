import React from 'react'

class Exchange extends React.Component {

	render() {
		return (
		<div>
				<input placeholder='токен'></input>
				<label>Обменять на</label>
				<input placeholder='токен'></input>
				<input placeholder='сумма'></input>
				<button type='button'>Обменять</button>
			</div>
		)
	}
}
export default Exchange 