import {Component} from 'preact';
import  Header from './src/components/header/';
import Post from './src/components/post';
// import styles from '.src/milligram/';
import './src/style';

export default class App extends Component {
	render() {
		return (
			<div class="App">
				<Header />
				<h1>Contents Goes Here</h1>
				<Post />
			</div>
		);
	}
}
