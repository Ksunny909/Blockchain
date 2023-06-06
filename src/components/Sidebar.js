import React from 'react'

class Sidebar extends React.Component {
	render() {
		return (
			<div class="nav">
				<div class="nav2">
					<a href="#about">Мои счета</a>
					<a href="#about">Создать</a>
					<a href="#about">Импортировать счет</a>
				</div>
				<a href="#about">Поддержка</a>
				<a href="#about">Настройки</a>
			</div>
		)
	}
}
export default Sidebar