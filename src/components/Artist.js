import React from 'react';

const Artist = ({ artist }) => {
    if (!artist) return null
    const { images, name, followers, genres } = artist;
    return (
        <div>
            <h3><span style={{ color: "white" }}>Name: </span> {name}</h3>
            <p><span style={{ color: "white" }}>Followers: </span>{followers.total}</p>
            <p><span style={{ color: "white" }}>Genre: </span>{genres.join(',')}</p>
            <img
                src={images[0] && images[0].url}
                alt='artist-profile'
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    objectFit: "cover"
                }}
            />
        </div>
    )
}
export default Artist