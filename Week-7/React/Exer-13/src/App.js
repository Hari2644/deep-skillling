import React, { Component } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'books' // Try: 'books', 'blogs', 'courses', or 'none'
    };
  }

  render() {
    const { view } = this.state;

    // Method 1: If-Else
    let content;
    if (view === 'books') {
      content = <BookDetails />;
    } else if (view === 'blogs') {
      content = <BlogDetails />;
    } else if (view === 'courses') {
      content = <CourseDetails />;
    } else {
      content = <p>Please select a view.</p>;
    }

    return (
      <div className="App">
        <h1>📘 Blogger App</h1>

        {/* Method 2: Element variable (above) */}
        {content}

        {/* Method 3: Ternary */}
        <hr />
        {view === 'blogs'
          ? <p>Currently viewing Blogs</p>
          : <p>Currently not viewing Blogs</p>}

        {/* Method 4: && operator */}
        <hr />
        {view === 'courses' && <p>You are viewing course details</p>}
      </div>
    );
  }
}

export default App;
