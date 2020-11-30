import {pixelsToMs, updatePropertyOfTracks, updateTimeTrack} from "../track_sheduler/utils";

const servantOnChangeTrack = (state, action )=>{


    let { tracks } = state;


    const changedTrack = action.value;
    tracks[ changedTrack.id ]= {
        ...tracks[ changedTrack.id ]
        , start_ms: pixelsToMs( changedTrack.left )
        , end_ms: pixelsToMs( changedTrack.left + changedTrack.width )
    };

    tracks[ changedTrack.id ].sign_time = updateTimeTrack(  tracks[ changedTrack.id ]);

    return{
        ...state
        , tracks: [ ...tracks ]
    };
};

export default servantOnChangeTrack;