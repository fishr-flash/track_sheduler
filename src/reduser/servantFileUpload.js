
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
            , start_time: 0
            , end_time: 36000
        }
    })];

    return{
            ...state
            , tracks
    };
};

export default servantFileUpload;