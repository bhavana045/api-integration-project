import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load data');
        return response.json(); 
      })
      .then((data) => {
        setPosts(data);         
        setLoading(false);      
      })
      .catch((err) => {
        setError(err.message);  
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div style={{ padding: '20px' }}>Loading data from internet...</div>;

  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#222' }}>My API Integration Project</h1>
      <p style={{ color: '#666' }}>Fetching and displaying data dynamically</p>
      
      <input 
        type="text"
        placeholder="Type here to filter posts by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '12px', width: '100%', marginBottom: '25px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '11px', color: '#aaa', fontWeight: 'bold', textTransform: 'uppercase' }}>Post ID: {post.id}</span>
              <h3 style={{ margin: '5px 0 10px 0', color: '#111', textTransform: 'capitalize' }}>{post.title}</h3>
              <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>{post.body}</p>
            </div>
          ))
        ) : (
          <p style={{ color: '#888' }}>No matches found for your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;
