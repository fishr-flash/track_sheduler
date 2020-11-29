import servantFileUpload from "./servantFileUpload";
import {ACTION_INIT, ON_CHANGE_FILES} from "../track_sheduler/consts";

export const store = {
    tracks:[
        {
            name: 'Track I'
            , start_time: 12456
            , end_time: 1425
        }
        , {
            name: 'Track II'
            , start_time: 12456
            , end_time: 1425
        }
        , {
            name: 'Track IITrack IITrack IITrack IITrack IITrack II'
            , start_time: 12456
            , end_time: 1425
        }
    ]

};

///TODO: Дописать удаление трека

export default function reducer ( state = store, action ) {

    switch ( action.type ) {

        case ACTION_INIT:
            break;
        case ON_CHANGE_FILES:
            state = servantFileUpload( state, action );
            break;

        default: throw new Error( 'Received unknown action type!');

    }


    /////////////////////////////CONSOLE/////////////////////////////////////
        ///TODO: Console log in the code "INDEX_JS" line 43
        if( process && process.env.NODE_ENV === 'development' ){
            console.group( 'Console log in the code "INDEX_JS" line 43' );
            console.info( 'state: ', state );
            console.info( 'this: ', this );
            //console.table( this );
            console.groupEnd();
        }
    /////////////////////////////END CONSOLE/////////////////////////////////
    return state;
}