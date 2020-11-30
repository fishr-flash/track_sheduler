import {updatePropertyOfTracks} from "../track_sheduler/utils";

const servantFileUpload = ( state, action )=>{


    let {
        tracks
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
            , tracks: updatePropertyOfTracks( tracks )
    };
};

export default servantFileUpload;