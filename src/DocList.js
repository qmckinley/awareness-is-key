import React from 'react';
import DocBox from './DocBox';

const DocList = ({ documentaries }) => { 
    return(
        <div>
            {
                documentaries.map((doc, i) => {
                    return(
                        <div>
                            <DocBox
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