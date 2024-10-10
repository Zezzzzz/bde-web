import React from 'react';
import { Link } from 'react-router-dom';
import video1 from './resources/bde-big-dick-energy.mp4';
import video2 from './resources/han-solo.mp4';
import video3 from './resources/penis.mp4';
import video4 from './resources/zague-big-dick-energy.mp4'
import video5 from './resources/cop.mp4'
import image1 from './resources/kong.jpeg'
import image2 from './resources/spiderman.jpeg'


function HomePage() {
  const navStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const searchBarStyle = {
    backgroundColor: '#222',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    width: '400px',
    color: '#fff',
  };

  const tagStyle = {
    backgroundColor: '#222',
    padding: '5px 10px',
    borderRadius: '15px',
    color: '#fff',
    margin: '5px',
    display: 'inline-block',
  };

  const mediaGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '15px',
    padding: '20px',
  };

  const mediaCardStyle = {
    backgroundColor: '#111',
    borderRadius: '5px',
    overflow: 'hidden',
    color: '#fff',
    cursor: 'pointer',
    position: 'relative',
    width: '100%',
    height: '200px', // Fixed height for the media container
  };

  const mediaInfoStyle = {
    padding: '10px',
  };

  const mediaStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures that the media fills the container while maintaining aspect ratio
  };
  
  const logoHighlightStyle = {
    backgroundColor: "#f90",
    padding: "0 2px",
    borderRadius: "2px",
    fontWeight: "bold",
    color: "#000"
  };

  const mediaItems = [
    {
      src: video1,
      type: 'video',
      title: 'Funny Crypto Meme #1',
      views: '24.4M',
      likes: '90%',
    },
    {
      src: video2,
      type: 'video',
      title: 'Crypto Rocket Animation',
      views: '19.1M',
      likes: '85%',
    },
    {
      src: image1,
      type: 'image',
      title: 'Crypto HODL Meme',
      views: '8.1M',
      likes: '88%',
    },
    {
      src: video3,
      type: 'video',
      title: 'Elon Musk Reaction',
      views: '8.2M',
      likes: '92%',
    },
    {
      src: image2,
      type: 'image',
      title: 'Bitcoin to the Moon',
      views: '5.7M',
      likes: '80%',
    },
    {
      src: video4,
      type: 'video',
      title: 'Elon Musk Reaction',
      views: '8.2M',
      likes: '92%',
    },
    {
      src: video5,
      type: 'video',
      title: 'Elon Musk Reaction',
      views: '8.2M',
      likes: '92%',
    },
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <nav style={navStyle}>
        <div>
          <span style={{ fontWeight: 'bold' }}>BigDick</span>
          <span style={logoHighlightStyle}>Coin</span>
        </div>
        <input type="text" placeholder="Search..." style={searchBarStyle} />
        <div>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '15px' }}>Home</Link>
          <Link to="/categories" style={{ color: '#fff', textDecoration: 'none', marginRight: '15px' }}>Categories</Link>
          <Link to="/live" style={{ color: '#fff', textDecoration: 'none' }}>Live</Link>
        </div>
      </nav>
      <div style={{ padding: '10px 20px', borderBottom: '1px solid #222' }}>
        <h2>Hot Memes</h2>
        <div style={{ marginTop: '10px' }}>
          {['Doge', 'Shiba Inu', 'HODL', 'Rocket', 'Memes', 'Elon', 'To the Moon'].map((tag) => (
            <span key={tag} style={tagStyle}>{tag}</span>
          ))}
        </div>
      </div>
      <div style={mediaGridStyle}>
        {mediaItems.map((item, index) => (
          <div>
            <div key={index} style={mediaCardStyle}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  style={mediaStyle}
                  controls={false}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  style={mediaStyle}
                  alt={item.title}
                />
              )}
            </div>
            <div style={mediaInfoStyle}>
                <h3 style={{ margin: '0', fontSize: '1em' }}>{item.title}</h3>
                <p style={{ margin: '5px 0', fontSize: '0.9em', color: '#ccc' }}>
                  {item.views} views • {item.likes} Likes
                </p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default HomePage;
