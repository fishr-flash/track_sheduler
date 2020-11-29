import {pixelsToMs, msToPixels, msToTime} from "../track_sheduler/utils";

describe( 'all tests', ()=>{

    test( "typeof of number", ()=>{
        const a = NaN;
        expect(  isNaN( a )).toBe( true );
        expect(  a ).toBe( NaN );
    });

    test( 'work msToPixels', ()=>{
       const mss = [
           [ 3600000, 27 ]
           , [ 5400000, 41 ]
           , [ 5820000, 44 ]
       ];


       mss.forEach( ( v )=>{
           expect( msToPixels( v[ 0 ] )).toBe( v[ 1 ] );
       } );

    });

    test( 'work pixelsToMs', ()=>{
       const mss = [
           [ 27, 3600000 ]
           , [ 54,7200000 ]
           , [ 40, 5340000 ]
           , [ 95, 12720000 ]
       ];


       mss.forEach( ( v )=>{
           expect( pixelsToMs( v[ 0 ] )).toStrictEqual( v[ 1 ] );
       } );

    });

    test( 'work msToTime', ()=>{
       const mss = [
           [ 3600000, {"hours": "01", "minutes": "00"} ]
           , [ 7200000, {"hours": "02", "minutes": "00"} ]
           , [  5340000, {"hours": "01", "minutes": "29"} ]
           , [  12720000, {"hours": "03", "minutes": "32"} ]
       ];


       mss.forEach( ( v )=>{
           expect( msToTime( v[ 0 ] )).toStrictEqual( v[ 1 ] );
       } );

    });
});