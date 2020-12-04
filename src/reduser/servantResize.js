import {updatePropertyOfTracks} from "../utils";

const servantResize = (state, action )=>{


    let {
        tracks
    } = state;

    let {
        sizeCellOfOneHour
    } = action;


    tracks = updatePropertyOfTracks( tracks, sizeCellOfOneHour );



    return{
        ...state
        , sizeCellOfOneHour
        , tracks: [...tracks ]
    };
};

export default servantResize;