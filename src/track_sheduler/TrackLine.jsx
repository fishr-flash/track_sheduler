import React, { useRef, useEffect, useState } from 'react';
import {connect} from "react-redux";
import {ON_CHANGE_TRACK, ON_CHANGE_WINDOW_SIZE} from "./consts";

const TrackLine = ( props )=>{

  const {onChangeTrack
        , id
        , onChangeWindowSize
        , track:{
            line_left
            , line_width
            , sign_time
        }} = props;

    const styleLeft = 10;
    const minimumLength = 10;

    const shellTrackLine = useRef( null );
    const arrowLeft = useRef( null );
    const [ myId, setMyId ] = useState( 0 );
    const [ trackLeft, setTrackLeft ] = useState( 0 );
    const [ trackWidth, setTrackWidth ] = useState( 0 );
    const [ didMount, setDIdMount ] = useState( true  );




    useEffect(()=>{
       if( id === 0 && didMount && shellTrackLine.current ){

           const updateWindowSize = ()=>{
               const widthTrackLine = shellTrackLine.current.getBoundingClientRect().width;
               const widthArrowLeft = arrowLeft.current.getBoundingClientRect().width;

               onChangeWindowSize(  widthTrackLine - ( widthArrowLeft * 2 ));
           };



           updateWindowSize();

           document.defaultView.onresize = ( )=>{
               updateWindowSize();

           };
       }

       if( !didMount && trackWidth ) {

           onChangeTrack( { id: myId
               , left: trackLeft
               , width: trackWidth });

       }

        setDIdMount( false );


    }, [
        onChangeWindowSize
        , onChangeTrack
        , shellTrackLine
        , arrowLeft
        , myId
        , trackLeft
        , trackWidth
        , didMount
        , id
    ]);

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

            let nowLeft;
            let nowWidth;

            if( arrow.className === 'arrow_left' ){
                nowLeft = ( e.clientX - shellTrackLineRect.left ) - shiftX;
                if( nowLeft < 0 ) nowLeft = 0;
                else if ( nowLeft > rightEdge ) nowLeft = rightEdge;
                arrow.style.left = nowLeft + 'px';


                nowWidth = ( ( rightEdge - nowLeft ) + styleLeft );
                trackLine.style.left =  nowLeft + 'px';
                trackLine.style.width = nowWidth + 'px';
                rightArrow.style.left = ( nowLeft ) + 'px';


            } else{

                nowWidth = e.clientX - trackLineRect.left - shiftX;

                if( nowWidth < minimumLength ) nowWidth = minimumLength;
                else if( nowWidth > maxWidth ) nowWidth = maxWidth;
                trackLine.style.width = nowWidth + 'px';

                const left = trackLine.style.left;
                nowLeft = Number( left.slice( -left.length, left.length - 2 ) );

            }


            
            setMyId( id );
            setTrackLeft( nowLeft );
            setTrackWidth( nowWidth );
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


            const width = track.style.width;
            const nowWidth = Number( width.slice( -width.length, width.length - 2 ) );

            setMyId( id );
            setTrackLeft( diff );
            setTrackWidth( nowWidth );

        };

        document.onmouseup = ( )=>{
            track.onmousedown = onMouseDownTrack;
            document.onmousemove = null;
            document.onmouseup = null;
        };


    };



    return(

      <div className="shell_track_line" ref={ shellTrackLine }>
          <div className="arrow_left"
               style={{ left: line_left }}
               ref={ arrowLeft }
               onMouseDown={ onMouseDownArrow }
          > </div>
          <div className="track_line"
               style={{ left: line_left, width: line_width}}
               onMouseDown={ onMouseDownTrack } >
              <div className="in_info">
                  { sign_time }
              </div>
          </div>
          <div className="arrow_right"
               style={{ left: line_left }}
               onMouseDown={ onMouseDownArrow }
          > </div>
      </div>


  );
};

export default connect(
    null
    ,dispatch => ({
        onChangeTrack: ( v ) => {
            dispatch( {type: ON_CHANGE_TRACK, value: v })
        }
        , onChangeWindowSize: ( v )=>{
            dispatch( {type: ON_CHANGE_WINDOW_SIZE, widthTrackLine: v })
        }
    })
)( TrackLine );