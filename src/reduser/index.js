import servantFileUpload from "./servantFileUpload";
import {ACTION_INIT, ON_CHANGE_FILES } from "../track_sheduler/consts";

export const store = {
    tracks:[
        {
            name: 'Track I'
            , start_ms: 3600000
            , end_ms: 3600000 * 12

        }
        , {
            name: 'Track II'
            , start_ms: 3600000 * 1.5
            , end_ms: 3600000 * 4
        }
        , {
            name: 'Track IITrack IITrack IITrack IITrack IITrack II'
            , start_ms: 3600000 * 8
            , end_ms: 3600000 * 7
        }
        , {
            name: 'IITrack IITrack IITrack II'
            , start_ms: 0
            , end_ms: 3600000
        }
    ]

};
///TODO: утилиты преобразования милисекунд в пиксели и часы/минуты
///TODO: Добавить форматирование таймлайна под конкретные значения времени
///TODO: Добавить диспатч изменений времени
///TODO: Добавить внешнюю строку подсказки форматирования времени
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