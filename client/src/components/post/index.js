import { Component } from 'preact';
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
            <div class="posts">
                {this.state.post.map(post => (
                    <div class={post._id} key={post._id}>
                        <h2>{post._title}</h2>
                        <p>{post._post}</p>
                        <h6>{post._time}</h6>
                    </div>
                ))}
            </div>
        );
    }
}
