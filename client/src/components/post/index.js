import { Component } from "preact";
const axios = require('axios');

export default class Post extends Component {
    state = {
        post: []
    };

    componentDidMount() {
        axios.get("http://localhost:3000/post").then(res => {
            console.log(res);
            this.setState({ post: res.data });
        });
    }

    render() {
        return (
            <ul>
                {this.state.post.map(post => 
                    <li key={post._id}> {post._post}</li>
                )}
            </ul>
        );
    }
}
