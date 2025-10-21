import React from 'react';
import Card from './Card';

const Home = () => {

    return (
        <div className="full-screen position-relative">
            {/* <video autoPlay loop muted  id="myVideo" className='background-video'>
                <source src="../assets/background.mp4" type="video/mp4" />
            </video> */}
            <div className="full-screen layout">
                <div className='tile-list'>
                    <Card text='Start the Quiz' route='/questions' img={'Button3.png'} />
                </div>
            </div>
        </div>
    );
};

export default Home;