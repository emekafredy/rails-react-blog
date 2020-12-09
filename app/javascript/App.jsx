import React from "react";
import { Routes } from './routes';

import { PostsProvider } from './context/posts';

function App() {
  return (
    <div>
      <PostsProvider>
        <Routes />
      </PostsProvider>
    </div>
  );
}

export default App; 
