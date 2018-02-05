import React, {Component} from 'react';
import BlogPostTitle from './BlogPostTitle';
import content from '../content-of-blog.js';

class BlogPost extends Component {
    

    render() {
   
        return (
            <div className="BlogPost">
               <BlogPostTitle/>
               <p>{content["blogpost1"]["title"]}</p>
               <p>{content["blogpost1"]["body"]} </p>
               <p>Post comment section, accordion?</p> {/** Use keys and map for teasing out blog data **/}
            </div>
        )
    }
}

export default BlogPost;