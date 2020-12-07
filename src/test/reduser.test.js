import reducer from '../reduser';

describe( 'reducers test', ()=>{


    test('reducer servantResize', () => {
        let state;
        state = reducer({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 53,
                line_width: 361,
                sign_time: '01:33 - 12:10 ( 10ч 37мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 51,
                line_width: 85,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 113,
                line_width: 411,
                sign_time: '03:18 - 15:23( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 2,
                line_width: 33,
                sign_time: '00:03 - 01:00( 00ч 58мин )'
            }], sizeCellOfOneHour: 34
        }, {type: 'onChangeWindowSize', sizeCellOfOneHour: 34});
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 53,
                line_width: 361,
                sign_time: '01:33 - 12:10 ( 10ч 37мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 51,
                line_width: 85,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 112,
                line_width: 411,
                sign_time: '03:18 - 15:23 ( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 33,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }], sizeCellOfOneHour: 34
        });
    });


    test('reducers servantOnChangeTrack', () =>
    {
        let state;
        state = reducer({
            tracks: [{
                name: 'Track I',
                start_ms: 21060000,
                end_ms: 43860000,
                line_left: 53,
                line_width: 361,
                sign_time: '05:51 - 12:11 ( 06ч 20мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 51,
                line_width: 85,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 113,
                line_width: 411,
                sign_time: '03:18 - 15:23 ( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 2,
                line_width: 33,
                sign_time: '00:03 - 01:00 ( 00ч 58мин )'
            }], sizeCellOfOneHour: 34
        }, {type: 'onChangeTrack', value: {id: 0, left: 199, width: 215}});
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 21060000,
                end_ms: 43860000,
                line_left: 53,
                line_width: 361,
                sign_time: '05:51 - 12:11 ( 06ч 20мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 51,
                line_width: 85,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 113,
                line_width: 411,
                sign_time: '03:18 - 15:23 ( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 2,
                line_width: 33,
                sign_time: '00:03 - 01:00 ( 00ч 58мин )'
            }], sizeCellOfOneHour: 34
        });
    });

    test('reducers servantFileUpload', () => {
        let state;
        state = reducer({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 53,
                line_width: 361,
                sign_time: '01:33 - 12:10 ( 10ч 37мин )'
            }, {
                name: 'Track II',
                start_ms: 3180000,
                end_ms: 14400000,
                line_left: 51,
                line_width: 85,
                sign_time: '00:53 - 04:00 ( 03ч 07мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 113,
                line_width: 411,
                sign_time: '03:18 - 15:23 ( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 2,
                line_width: 33,
                sign_time: '00:03 - 01:00 ( 00ч 58мин )'
            }], sizeCellOfOneHour: 34
        }, {type: 'onChangeFiles', value: ['29135.mp3']});
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 53,
                line_width: 361,
                sign_time: '01:33 - 12:10 ( 10ч 37мин )'
            }, {
                name: 'Track II',
                start_ms: 3180000,
                end_ms: 14400000,
                line_left: 30,
                line_width: 106,
                sign_time: '00:53 - 04:00 ( 03ч 07мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 112,
                line_width: 411,
                sign_time: '03:18 - 15:23 ( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 33,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }, {
                name: '29135.mp3',
                start_ms: 0,
                end_ms: 3600000,
                line_left: 0,
                line_width: 34,
                sign_time: '00:00 - 01:00 ( 01ч 00мин )'
            }], sizeCellOfOneHour: 34
        });
    });


    test('reducers servantOnChangeTrack2', () => {
        let state;
        state = reducer({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 57,
                line_width: 393,
                sign_time: '01:33 - 12:10 ( 10ч 37мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 56,
                line_width: 93,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 122,
                line_width: 447,
                sign_time: '03:18 - 15:23 ( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 194595,
                end_ms: 86691892,
                line_left: 2,
                line_width: 889,
                sign_time: '00:04 - 24:00 ( 24ч 00мин )'
            }], sizeCellOfOneHour: 37
        }, {type: 'onChangeTrack', value: {id: 3, left: 2, width: 889}});
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 57,
                line_width: 393,
                sign_time: '01:33 - 12:10 ( 10ч 37мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 56,
                line_width: 93,
                sign_time: '01:30 - 04:00( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 122,
                line_width: 447,
                sign_time: '03:18 - 15:23 ( 12ч 05мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 194595,
                end_ms: 86886486,
                line_left: 2,
                line_width: 891,
                sign_time: '00:04 - 24:00 ( 24ч 00мин )'
            }], sizeCellOfOneHour: 37
        });
    });



});