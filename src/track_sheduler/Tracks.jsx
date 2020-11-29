import React from 'react';
import {connect} from "react-redux";
import TrackLine from "./TrackLine";

const Tracks = ( { tracks })=> {

    return tracks.map( ( v, i )=>(

        <tr key={'tr_track' + i }>
            <td title={ v.name } >{ v.name }</td>
            <td colSpan="27">
                <TrackLine
                    id={ i }
                    start_time={ v.start }
                    end_time={v.end } />
            </td>
        </tr>

    ) );
};

export default connect(

    state => {
        return ({
            tracks: state.tracks
        });
    }, null
)( Tracks );