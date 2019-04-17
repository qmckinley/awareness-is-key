import React from 'react';

const DocCard = ({ id, title, link, description, genre, releaseDate, coverImg, episodes }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h4>{title}</h4>
                <img alt='Cover Img' src={coverImg} />
            </div>
            <div>
                <h6>Description</h6>
                <p>{description}</p>
            </div>
            <div>
                <h6>Release Date</h6>
                <p>{releaseDate}</p>
            </div>
            <div>
                <h6>Episodes</h6>
                {/* <p>{<a href={link}>{name}</a>}</p> */}
            </div>

        </div>
    );
}

export default DocCard;
