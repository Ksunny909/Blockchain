import React from 'react'
import { LuLandmark } from "react-icons/lu"
import { FiRefreshCw } from "react-icons/fi"
import { BiTransferAlt } from "react-icons/bi"
import { BiTransfer } from "react-icons/bi"
import { AiOutlineVerticalAlignBottom } from "react-icons/ai"
import { AiOutlineVerticalAlignTop } from "react-icons/ai"
import Buy from "./Buy"
import Send from "./Send"
import Exchange from "./Exchange"
import Active from "./Active"

class Transaction extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		num1: 0,
	// 		result: 10,
	// 	};
	// 	this._changeNum1 = this._changeNum1.bind(this);
	// }

	// _changeNum1(e) {
	// 	if (e.target.validity.valid) {
	// 		var newNum1 = (e.target.value)
	// 		this.setState({
	// 			num1: newNum1,
	// 			result: this.state.result + this.state.newNum1
	// 		});
			
	// 	}
	// }
	constructor(props) {
		super(props);
		this.state = {
			editFormBuy:true,
			editFormSend: false,
			editFormExchange: false,
			editFormActive: false
		}
	}
	render() {
		return (
			<div className='content'>
				{/* <h1>{this.state.result}BTC</h1> */}
				<h1>205 BTC</h1>
				<h2>$10.741</h2>
				<form>
					<div className="icon">
						<div className="icon1">
							<AiOutlineVerticalAlignBottom  onClick={() => {
								this.setState({
									editFormBuy: true,
									editFormSend: false,
									editFormExchange: false,
									editFormActive: false
								})
							}} className='edit-icon'/>
							<h4>Купить</h4>
						</div>
						<div className="icon1">
							< AiOutlineVerticalAlignTop onClick={() => {
								this.setState({
									editFormBuy: false,
									editFormSend: true,
									editFormExchange: false,
									editFormActive: false
								})
							}} className='edit-icon'/>
							<h4>Отправить</h4>
						</div>
						<div className="icon1">
							< FiRefreshCw onClick={() => {
								this.setState({
									editFormBuy: false,
									editFormSend: false,
									editFormExchange: true,
									editFormActive: false
								})
							}} className='edit-icon' />
							<h4>Обменять</h4>
						</div>
						<div className="icon1">
							<LuLandmark onClick={() => {
								this.setState({
									editFormBuy: false,
									editFormSend: false,
									editFormExchange: false,
									editFormActive: true
								})
							}} className='edit-icon' />
							<h4>Активы</h4>
						</div>
					</div> 
					{this.state.editFormSend && <Send />}
					{this.state.editFormBuy && <Buy />}
					{this.state.editFormExchange && <Exchange />}
					{this.state.editFormActive && <Active />}
					{/* <input placeholder='счет'></input>
					<input placeholder='токен'></input>
					<input placeholder='сумма'></input>
					<button type='button'>Купить</button> */}
				</form>
			</div>
		)
	}
}
export default Transaction 