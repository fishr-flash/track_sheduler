import {updatePropertyOfTracks} from "../utils";

const servantResize = (state, action )=>{


    let {
        tracks
    } = state;

    const {
        widthTrackLine
    } = action;

    const sizeCellOfOneHour = widthTrackLine / 24;
    tracks = updatePropertyOfTracks( tracks, sizeCellOfOneHour );

    return{
        ...state
        , sizeCellOfOneHour
        , tracks: [...tracks ]
    };
};

export default servantResize;