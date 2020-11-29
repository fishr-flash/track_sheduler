import React from 'react';
import {msToPixels, msToTime} from "./utils";
import {connect} from "react-redux";
import {ON_CHANGE_FILES} from "./consts";

const TrackLine = ( props )=>{
  const { start_ms
            , end_ms
            , id } = props;




    const lineLeft = msToPixels( start_ms );
    const lineWidth = msToPixels( end_ms - start_ms );

    const styleLeft = 10;
    const minimumLength = 10;

    const startTime = msToTime( start_ms );
    const endTime = msToTime( end_ms );
    const durationTime = msToTime( end_ms - start_ms );


    const onMouseDownArrow = ( e )=>{
        const arrow = e.target;
        arrow.onmousedown = null;
        arrow.ondragstart = ()=> false;


        const rectArrow = arrow.getBoundingClientRect();
        const shellTrackLine = arrow.parentNode;
        const shellTrackLineRect = shellTrackLine.getBoundingClientRect();
        const rightArrow = shellTrackLine.children[ 2 ];
        const trackLine = shellTrackLine.children[ 1 ];
        const trackLineRect = trackLine.getBoundingClientRect();
        const rightEdge = ( trackLineRect.left - shellTrackLineRect.left ) + ( trackLineRect.width - rectArrow.width - minimumLength ) ;
        const maxWidth = ( shellTrackLineRect.width + shellTrackLineRect.left ) - trackLineRect.left - rectArrow.width;
        const shiftX = arrow.className === 'arrow_left'
            ? ( e.clientX - rectArrow.left )
            : e.clientX - trackLineRect.width - trackLineRect.left;

        document.onmousemove = ( e )=>{

            if( arrow.className === 'arrow_left' ){
                let nowLeft = ( e.clientX - shellTrackLineRect.left ) - shiftX;
                if( nowLeft < 0 ) nowLeft = 0;
                else if ( nowLeft > rightEdge ) nowLeft = rightEdge;
                arrow.style.left = nowLeft + 'px';


                trackLine.style.left =  nowLeft + 'px';
                trackLine.style.width = ( ( rightEdge - nowLeft ) + styleLeft ) + 'px';
                rightArrow.style.left = ( nowLeft ) + 'px';


            } else{

                let nowWidth = e.clientX - trackLineRect.left - shiftX;

                if( nowWidth < minimumLength ) nowWidth = minimumLength;
                else if( nowWidth > maxWidth ) nowWidth = maxWidth;
                trackLine.style.width = nowWidth + 'px';

            }


        };

        document.onmouseup = ()=>{
            document.onmousemove =null;
            document.onmouseup =null;
            arrow.onmousedown = onMouseDownArrow;
        };

    };

    const onMouseDownTrack = ( e )=>{

        e.target.onmousedown = null;
        e.target.ondragstart = ()=> false;

        const shellTrackLine = e.currentTarget.parentNode;
        const shellTrackLineRect = shellTrackLine.getBoundingClientRect();
        const leftArrow = shellTrackLine.children[ 0 ];
        const track = shellTrackLine.children[ 1 ];
        const trackRect = track.getBoundingClientRect();
        const rightArrow = shellTrackLine.children[ 2 ];
        const rightArrowRect = rightArrow.getBoundingClientRect();
        let startPoint = trackRect.left;
        let shiftX = e.clientX - trackRect.left - styleLeft;
        if( track.style.left ){
            const left = track.style.left;
            const nowLeft = Number( left.slice( -left.length, left.length - 2 ) );
            startPoint = startPoint - nowLeft;
            shiftX = e.clientX - trackRect.left;
        }


        const rightEdge = shellTrackLineRect.width  - ( rightArrowRect.width * 2 + trackRect.width );


        document.onmousemove = ( e )=>{


            let diff = e.clientX - startPoint - shiftX;
            if( diff < 0 ) diff = 0;
            else if( diff > rightEdge ) diff = rightEdge;
            track.style.left = diff + 'px';
            leftArrow.style.left = diff + 'px';
            rightArrow.style.left = diff + 'px';


        };

        document.onmouseup = ( )=>{
            track.onmousedown = onMouseDownTrack;
            document.onmousemove = null;
            document.onmouseup = null;
        };


    };



    return(

      <div className="shell_track_line">
          <div className="arrow_left"
               style={{ left: lineLeft }}
               onMouseDown={ onMouseDownArrow }
          > </div>
          <div className="track_line"
               style={{ left: lineLeft, width: lineWidth}}
               onMouseDown={ onMouseDownTrack } >
              <div className="in_info">
                  {`${ startTime.hours}:${ startTime.minutes}`} - {`${ endTime.hours}:${ endTime.minutes} 
                  ( ${ durationTime.hours}ч ${ durationTime.minutes }мин)`}
              </div>
          </div>
          <div className="arrow_right"
               style={{ left: lineLeft }}
               onMouseDown={ onMouseDownArrow }
          > </div>
      </div>


  );
};

export default connect(
    null
    ,dispatch => ({
        onChangeFiles: ( v ) => {
            dispatch( {type: ON_CHANGE_FILES, value: v })
        }
    })
)( TrackLine );