import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Credits from './Components/Credits';
import Info from './Components/Info';
import Home from './Components/Home';
import Test from './Components/Test';
import Topics from './Components/Topics';
import NotFound from './Components/NotFound';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						<Navbar />
						<Switch>
							<Route path="/" exact render={() => <h1>Welcome home</h1>} />
							<Route path="/about" component={About} />
							<Route path="/home" component={Home} />
							<Route path="/info" component={Info} />
							<Route path="/credits" component={Credits} />
							<Route path="/test" component={Test} />
							<Route path="/topics" component={Topics} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</header>
			</div>
		</BrowserRouter>
	);
}

export default App;
