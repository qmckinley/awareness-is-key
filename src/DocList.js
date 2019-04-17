import React from 'react';
import DocCard from './DocCard';

const DocList = ({ documentaries }) => { 
    return(
        <div>
            {
                documentaries.map((doc, i) => {
                    return(
                        <div>
                            <DocCard
                                key={i} 
                                id={documentaries[i].id} 
                                title={documentaries[i].title} 
                                link={documentaries[i].link} 
                                description={documentaries[i].description} 
                                genre={documentaries[i].genre} 
                                releaseDate={documentaries[i].releaseDate} 
                                coverImg={documentaries[i].coverImg} 
                                episodes={documentaries[i].episodes} 
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default DocList;

//  const CardList = ({ robots }) => {
//      const cardComponent = robots.map((user, i) => {
//          return <Card id={robots[i].id} />
//      })
//      return (
//          <div>
//              {cardComponent}
//          </div>
//      );
//  }