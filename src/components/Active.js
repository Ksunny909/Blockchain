import React from 'react'
import ETH from './ETH'
import BUSD from './BUSD'
import SOL from './SOL'
class Active extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editFormETH: false,
			editFormBUSD: false,
			editFormSOL: false
		}
	}
	render() {
		return (
			<div>
				<button onClick={() => {
					this.setState({
						editFormETH: !this.state.editFormETH,
						editFormBUSD: false,
						editFormSOL: false
					})
				}} className="token" type='button'>0 ETH</button>
				{this.state.editFormETH && <ETH />}
				<button onClick={() => {
					this.setState({
						editFormETH: false,
						editFormBUSD: !this.state.editFormBUSD,
						editFormSOL: false
					})
				}} className="token" type='button'>0 MATIC</button>
				{this.state.editFormBUSD && <BUSD />}
				<button onClick={() => {
					this.setState({
						editFormETH: false,
						editFormBUSD: false,
						editFormSOL: !this.state.editFormSOL
					})
				}} className="token" type='button'>0 SOL</button>
				{this.state.editFormSOL && <SOL />}
			</div>
			
		)
	}
}
export default Active 