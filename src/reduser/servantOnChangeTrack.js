import {pixelsToMs, updateTimeTrack} from "../utils";

const servantOnChangeTrack = (state, action )=>{


    let { tracks, sizeCellOfOneHour } = state;


    const changedTrack = action.value;
    tracks[ changedTrack.id ]= {
        ...tracks[ changedTrack.id ]
        , start_ms: pixelsToMs( changedTrack.left, sizeCellOfOneHour )
        , end_ms: pixelsToMs( changedTrack.left + changedTrack.width, sizeCellOfOneHour )
    };

    tracks[ changedTrack.id ].sign_time = updateTimeTrack(  tracks[ changedTrack.id ]);

    return{
        ...state
        , tracks: [ ...tracks ]
    };
};

export default servantOnChangeTrack;