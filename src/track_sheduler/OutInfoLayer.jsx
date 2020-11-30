import React from 'react';

const OutInfoLayer = ( { tracks } )=>{

    let topPosition = -( tracks.length * 26.5 );
    let leftPosition = 860;
    const verticalStep = 26.5;
    const leftStep = -230;

    const arrDivInfo = tracks.map( ( v, i  )=>{
        const div = <div
                    key={ 'out_info' + i }
                    className="out_info"
                    style={{ left:Math.ceil( leftPosition )
                        , top: Math.ceil( topPosition )
                        , width: 230
                        , textAlign: 'center'
                        , maxWidth: 230 }}>{ v.sign_time }</div>
        topPosition += verticalStep;
        leftPosition += leftStep;
        return div ;
    })
    return(
        <div>
            { arrDivInfo }
        </div>
    );
};

export default OutInfoLayer;