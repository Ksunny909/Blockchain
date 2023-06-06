import React from 'react'
import Header from './components/Header'
import Transaction from './components/Transaction'
import Sidebar from './components/Sidebar'
class App extends React.Component{
	render(){
		return(<div className="name">
			<Header />
			<main>
				<Transaction />
			</main>
			<aside>
				<Sidebar />
			</aside>
		</div>)
	}
}
export default App