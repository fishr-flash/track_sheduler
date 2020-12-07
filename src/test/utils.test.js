import {pixelsToMs, msToPixels, msToTime} from "../utils";
import {DEFAULT_SIZE_CELL_ONE_HOUR} from "../track_sheduler/consts";

describe( 'all tests', ()=>{

    test( "typeof of number", ()=>{
        const a = NaN;
        expect(  isNaN( a )).toBe( true );
        expect(  a ).toBe( NaN );
    });

    test( 'work msToPixels', ()=>{
       const mss = [
           [ 3600000, DEFAULT_SIZE_CELL_ONE_HOUR, 34 ]
           , [ 5400000, DEFAULT_SIZE_CELL_ONE_HOUR, 51 ]
           , [ 5820000, DEFAULT_SIZE_CELL_ONE_HOUR, 55 ]
           , [ 86400000, DEFAULT_SIZE_CELL_ONE_HOUR, 816 ]
       ];


       mss.forEach( ( v )=> expect( msToPixels( v[ 0 ], v[ 1 ] )).toBe( v[ 2 ] ) );

    });

    test( 'work pixelsToMs', ()=>{
       const mss = [
           [ 27, DEFAULT_SIZE_CELL_ONE_HOUR, 2858824 ]
           , [ 54, DEFAULT_SIZE_CELL_ONE_HOUR,5717647 ]
           , [ 40, DEFAULT_SIZE_CELL_ONE_HOUR, 4235294 ]
           , [ 95, DEFAULT_SIZE_CELL_ONE_HOUR, 10058824 ]
       ];


       mss.forEach( ( v )=>{
           expect( pixelsToMs( v[ 0 ], v[ 1 ] )).toBe( v[ 2 ] );
       } );

    });


    test( 'work msToTime', ()=>{
       const mss = [
            [ 3600000, {"hours": 1, "minutes": 0} ]
           , [ 7200000, {"hours":2, "minutes": 0} ]
           , [  5340000, {"hours": 1, "minutes": 29} ]
           , [  12720000, {"hours": 3, "minutes": 32} ]
           , [  3600000 - 150000, {"hours": 0, "minutes": 58} ]
           , [  3600000 * 15.38 - 3600000 * 8.44, {"hours": 6, "minutes": 56 } ]
           , [  3600000 * 8.46 , {"hours": 8, "minutes": 28} ]
           , [  75600000 , {"hours": 21, "minutes": 0} ]
           , [  90540000 , {"hours": 24, "minutes": 0} ]
           , [  86400000 , {"hours": 24, "minutes": 0} ]
       ];


       mss.forEach( ( v )=>{
           expect( msToTime( v[ 0 ] )).toStrictEqual( v[ 1 ] );
       } );

    });

});