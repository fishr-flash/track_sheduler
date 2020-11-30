import {updatePropertyOfTracks} from "../track_sheduler/utils";

const servantInit = (state )=>{


    let {
        tracks
    } = state;



    tracks = updatePropertyOfTracks( tracks );



    return{
        ...state
        , tracks: [...tracks ]
    };
};

export default servantInit;