import React, {Component} from 'react';
import BlogPostTitle from './BlogPostTitle';

class BlogPost extends Component {
    render() {
        return (
            <div className="BlogPost">
               <BlogPostTitle/> {/** Used keys and map for teasing out blog data **/}
            </div>
        )
    }
}

export default BlogPost;