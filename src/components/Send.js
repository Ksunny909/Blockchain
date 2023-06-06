import React from 'react'

class Send extends React.Component {
	render() {
		return (
			<div>
				<input placeholder='счет отправления'></input>
				<input placeholder='актив'></input>
				<input placeholder='сумма'></input>
				<button type='button'>Отправить</button>
			</div>
		)
	}
}
export default Send 