import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt='header-logo'/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Message</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                        alt=""/>
                </div>
                <div> ava + description</div>
                <div> My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
