import {IS_24_HOURS_OF_MS} from "./track_sheduler/consts";


const oneHourInMs = 1000 * 60 * 60;

export const msToPixels = (ms, sizeCellOfOneHour )=>{
    if( ms < IS_24_HOURS_OF_MS ){
        let hr = ms / oneHourInMs;
        return Math.round( hr * sizeCellOfOneHour );
    } else {
        return Math.round(24 /* max time on hours */ * sizeCellOfOneHour );
    }
};

export const pixelsToMs = (px, sizeCellOfOneHour )=> Math.round( ( px / sizeCellOfOneHour) * oneHourInMs );

export const msToTime = ( ms )=>{

    let hr = Math.floor( ms / oneHourInMs );
    let mnt = Math.floor( ( ms%oneHourInMs ) / ( 1000 * 60 ) );

    if( mnt === 60 ) {
        hr += 1;
        mnt = 0;
    }

    if( hr >= 24 || ( hr === 23 && mnt === 60 ) ){
        hr = 24;
        mnt = 0;
    }
    return{
        hours: hr
        , minutes: mnt
    };

};

export const updatePropertyOfTracks = (tracks, sizeCellOfOneHour )=>{

    return tracks.map( ( v )=>{
        return {...v
            ,line_left: msToPixels( v.start_ms, sizeCellOfOneHour )
            ,line_width: msToPixels( v.end_ms - v.start_ms, sizeCellOfOneHour )
            , sign_time: updateTimeTrack( v )

        };


    });

};

export const updateTimeTrack = ( trackData )=>{

    const endTime = msToTime( trackData.end_ms );
    const dTime = msToTime( trackData.end_ms - trackData.start_ms );
    const startTimeMinutes = ( endTime.hours * 60 + endTime.minutes ) - ( dTime.hours * 60 + dTime.minutes );
    const startTime = {
        hours: Math.floor( startTimeMinutes / 60 )
        , minutes: startTimeMinutes % 60
    };


    const durationMinutes = Math.floor( ( endTime.hours * 60 + endTime.minutes ) - ( startTime.hours * 60 + startTime.minutes ) );
    const durationTime = {
        hours: Math.floor( durationMinutes / 60 )
        , minutes:  durationMinutes%60
    };


    const ifOneThenTwo = ( nm )=>{
        if( nm >= 10 ) return nm.toString();
        else return  '0' + nm;
    };
    const sh = ifOneThenTwo( startTime.hours );
    const sm = ifOneThenTwo( startTime.minutes );
    const eh = ifOneThenTwo( endTime.hours );
    const em = ifOneThenTwo( endTime.minutes );
    const dh = ifOneThenTwo( durationTime.hours );
    const dm = ifOneThenTwo( durationTime.minutes );

    return `${ sh }:${ sm } - ${ eh }:${ em } ( ${ dh }ч ${ dm }мин )`;

};
