import React, { Component } from 'react';

class BlogPostTitle extends Component {
    render() { 
        return (    
               <div className="BlogPostTitle">
                  <h2>Post title</h2>
                  <p>Post text content.</p>
                  <p>Post image. </p>
                  <p>Post comment section, accordion?</p>
               </div> 
            )
    }
}
 
export default BlogPostTitle;