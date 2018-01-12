import React, {Component} from 'react';
import BlogPostTitle from './BlogPostTitle';

class BlogPost extends Component {
    render() {
        return (
            <div className="BlogPost">
               <BlogPostTitle/>
            </div>
        )
    }
}

export default BlogPost;