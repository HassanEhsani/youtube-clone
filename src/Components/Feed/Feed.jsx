import React from 'react';
import React, { useState } from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data';

const Feed = ({ category }) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=us&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [category])

    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
            <Link to={`video/20/4521`} className='card'>
                <img src={thumbnail1} alt="" />
                <h2>Best chanel to learn coding that help you to be a web developer</h2>
                <h3>Hassan Web</h3>
                <p>15k Views &bull; 2 days ago</p>
            </Link>
                )
            })}

        </div >
    )
}

export default Feed
