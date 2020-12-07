import {pixelsToMs, updateTimeTrack} from "../utils";

const servantOnChangeTrack = (state, action )=>{


    let { tracks, sizeCellOfOneHour } = state;

    const {
        id
        , left
        , width
    } = action.value;

    tracks[ id ]= {
        ...tracks[ id ]
        , start_ms: pixelsToMs( left, sizeCellOfOneHour )
        , end_ms: pixelsToMs( left + width, sizeCellOfOneHour )
        , line_left: left
        , line_width: width
    };

    tracks[ id ].sign_time = updateTimeTrack(  tracks[ id ]);

    return{
        ...state
        , tracks: [ ...tracks ]
    };
};

export default servantOnChangeTrack;