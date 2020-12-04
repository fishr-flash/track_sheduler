import {updatePropertyOfTracks} from "../utils";

const servantFileUpload = ( state, action )=>{


    let {
        tracks
        , sizeCellOfOneHour
    } = state;

    const {
        value
    } = action;

    tracks = [ ...tracks, ...value.map( ( v ) =>{
        return{
            name: v
            , start_ms: 0
            , end_ms: 3600000
        }
    })];

    return{
            ...state
            , tracks: updatePropertyOfTracks( tracks, sizeCellOfOneHour )
    };
};

export default servantFileUpload;