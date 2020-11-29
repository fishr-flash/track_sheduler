import React from 'react';
import {connect } from 'react-redux';
import {ON_CHANGE_FILES} from "./consts";

const TrackUploader = ( { onChangeFiles })=>{

    const changeHandler = ( e ) => {
        const newFiles = [ ...e.target.files ].map( ( v )=>{
            return v.name;
        });
        onChangeFiles( newFiles );
    };

    return(
        <div>
            <input type="file" id="fileElem"
                   multiple accept="audio/*"
                   style={{display:'none'}}
                   onChange={ changeHandler }/>
            <label htmlFor="fileElem" className={'button_files'}>Добавить треки</label>
        </div>
    )
};

export default connect(
    null
    ,dispatch => ({
        onChangeFiles: ( v ) => {
            dispatch( {type: ON_CHANGE_FILES, value: v })
        }
    })
)( TrackUploader );