import { Component } from 'preact';
import  Header from './components/header/';
import Post from './components/post';
import './milligram';
import './style';

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