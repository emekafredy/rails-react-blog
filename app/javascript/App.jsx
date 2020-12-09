import React from "react";
import { Routes } from './routes';

import { PostsProvider } from './context/posts';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <div>
      <AuthProvider>
        <PostsProvider>
          <Routes />
        </PostsProvider>
      </AuthProvider>
    </div>
  );
}

export default App; 
