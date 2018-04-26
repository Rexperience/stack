import {Component} from 'preact';
import  Header from './src/components/header/';

// import styles from '.src/milligram/';
import './src/style';

export default class App extends Component {
	render() {
		return (
			<div class="App">
				<Header />
				<h1>Content Goes Here</h1>
			</div>
		);
	}
}
