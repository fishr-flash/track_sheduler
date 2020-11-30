import {IS_24_HOURS_OF_MS, ONE_HOUR} from "./consts";

export const msToPixels = (ms )=>{
    const dt = new Date( 0 );
    const zeroDate = new Date( 0 );
    dt.setMilliseconds( dt.getMilliseconds() + ms );
    let hours = ( dt.getHours() - zeroDate.getHours() );
    let minutes = ( dt.getMinutes() - zeroDate.getMinutes() );
    if( ms >= IS_24_HOURS_OF_MS )minutes = 0;
    hours += minutes / 60;
    if( ms >= IS_24_HOURS_OF_MS ) hours = 24;

    return Math.ceil( hours * ONE_HOUR.pixelSize );
};

export const pixelsToMs = (px )=>{

    let hours = Number( Number( px / ONE_HOUR.pixelSize ).toFixed( 2 ) );

    let minutes = Math.ceil( ( hours%1 ) * 60 );
    hours = Math.floor( hours );
    const dt = new Date( 0 );
    dt.setHours( dt.getHours() + hours, dt.getMinutes() + minutes, 0, 0 );

    return ( dt.getTime() - new Date( 0 ).getTime() );
};

export const msToTime = ( ms )=>{

    const dt = new Date(0 );

    dt.setHours( 0 );
    dt.setMilliseconds( ms );

    const zeroDate = new Date( 0 );
    zeroDate.setHours( 0 );
    let hours = ( dt.getHours() - zeroDate.getHours() ).toString();


    if( hours.length === 1 ) hours = '0' + hours;

    let minutes = ( dt.getMinutes() - zeroDate.getMinutes() );
    if( dt.getSeconds() - zeroDate.getSeconds() ) minutes += 1;
    if( minutes.toString().length === 1 ) minutes = '0' + minutes;

    if( hours === '00' && ms >=  IS_24_HOURS_OF_MS )
    {
        hours = '24';
        minutes = '00';
    }
    return{
      hours
        , minutes: minutes.toString()
    };
};

export const updatePropertyOfTracks = (tracks )=>{

    return tracks.map( ( v )=>{
        return {...v
            ,line_left: msToPixels( v.start_ms )
            ,line_width: msToPixels( v.end_ms - v.start_ms )
            , sign_time: updateTimeTrack( v )

        };


    });

};

export const updateTimeTrack = ( trackData )=>{


    const startTime = msToTime( trackData.start_ms );
    const endTime = msToTime( trackData.end_ms );
    const durationTime = msToTime( trackData.end_ms - trackData.start_ms );

    return `${ startTime.hours}:${ startTime.minutes} - ${ endTime.hours}:${ endTime.minutes}`+
        `( ${ durationTime.hours}ч ${ durationTime.minutes }мин)`;
};
