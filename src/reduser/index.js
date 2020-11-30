import servantFileUpload from "./servantFileUpload";
import {ACTION_INIT, ON_CHANGE_FILES, ON_CHANGE_TRACK, ON_CHANGE_WINDOW_SIZE} from "../track_sheduler/consts";
import servantInit from "./servantInit";
import servantOnChangeTrack from "./servantOnChangeTrack";

export const store = {
    tracks:[
        {
            name: 'Track I'
            , start_ms: 5580000
            , end_ms: 3600000 * 12.16

        }
        , {
            name: 'Track II'
            , start_ms: 3600000 * 1.5
            , end_ms: 3600000 * 4
        }
        , {
            name: 'Track IITrack IITrack IITrack IITrack IITrack II'
            , start_ms: 11880000
            , end_ms: 3600000 * 15.38
        }
        , {
            name: 'IITrack IITrack IITrack II'
            , start_ms: 150000
            , end_ms: 3600000
        }


    ]

};


///TODO: Дописать удаление трека

export default function reducer ( state = store, action ) {

    switch ( action.type ) {

        /// init здесь вместо какого нибудь промиса, откуда будут получены
        /// начальные данные о треках
        case ACTION_INIT:
        case ON_CHANGE_WINDOW_SIZE:
            state =servantInit( state );
            break;
        case ON_CHANGE_FILES:
            state = servantFileUpload( state, action );
            break;

        case ON_CHANGE_TRACK:
            state = servantOnChangeTrack( state, action );
            break;

        default:
            state =servantInit( state )
            // first action type of build version is unknown
            //throw new Error( 'Received unknown action type! action.type: ' + action.type );

    }



    return state;
}