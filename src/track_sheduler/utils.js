import {ONE_HOUR} from "./consts";

export const msToPixels = (ms )=>{
    const dt = new Date( 0 );
    const zeroDate = new Date( 0 );
    dt.setMilliseconds( dt.getMilliseconds() + ms );
    let hours = ( dt.getHours() - zeroDate.getHours() );
    const minutes = ( dt.getMinutes() - zeroDate.getMinutes() );
    hours += minutes / 60;

    return Math.ceil( hours * ONE_HOUR.pixelSize );
};

export const pixelsToMs = (px )=>{

    let hours = px / ONE_HOUR.pixelSize;
    let minutes = Math.ceil( ( hours%1 ) * 60 );
    hours = Math.floor( hours );
    const dt = new Date( 0 );
    dt.setHours( dt.getHours() + hours, dt.getMinutes() + minutes, 0, 0 );

    return ( dt.getTime() - new Date( 0 ).getTime() );
};

export const msToTime = ( ms )=>{

    const dt = new Date(0 );
    dt.setMilliseconds( ms );
    const zeroDate = new Date( 0 );
    let hours = ( dt.getHours() - zeroDate.getHours() ).toString();
    if( hours.length === 1 ) hours = '0' + hours;

    let minutes = ( dt.getMinutes() - zeroDate.getMinutes() ).toString();
    if( minutes.length === 1 ) minutes = '0' + minutes;

    return{
      hours
        , minutes
    };
};