import reducer from '../reduser';

describe('reducers test', () => {

    test('reducers servantResize', () => {
        let state;
        state = reducer({
            tracks: [{name: 'Track I', start_ms: 5580000, end_ms: 43776000}, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000
            }, {name: 'IITrack IITrack IITrack II', start_ms: 150000, end_ms: 3600000}], sizeCellOfOneHour: 34
        }, {type: 'onChangeWindowSize', widthTrackLine: 786.6500244140625});
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 51,
                line_width: 348,
                sign_time: '01:33 - 12:09 ( 10ч 36мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 49,
                line_width: 82,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 108,
                line_width: 396,
                sign_time: '03:18 - 15:22 ( 12ч 04мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 31,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }], sizeCellOfOneHour: 32.77708435058594
        });
    });

    test('reducers servantOnChangeTrack resize', () => {
        let state;
        state = reducer({
            tracks: [{
                name: 'Track I',
                start_ms: 2855654,
                end_ms: 43823300,
                line_left: 26,
                line_width: 373,
                sign_time: '00:48 - 12:10 ( 11ч 22мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 49,
                line_width: 82,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 108,
                line_width: 396,
                sign_time: '03:18 - 15:22 ( 12ч 04мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 31,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }], sizeCellOfOneHour: 32.77708435058594
        }, {type: 'onChangeTrack', value: {id: 0, left: 26, width: 373}});
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 2855654,
                end_ms: 43823300,
                line_left: 26,
                line_width: 373,
                sign_time: '00:48 - 12:10 ( 11ч 22мин )'
            }, {
                name: 'Track II',
                start_ms: 5400000,
                end_ms: 14400000,
                line_left: 49,
                line_width: 82,
                sign_time: '01:30 - 04:00 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 108,
                line_width: 396,
                sign_time: '03:18 - 15:22 ( 12ч 04мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 31,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }], sizeCellOfOneHour: 32.77708435058594
        });
    });

    test('reducers servantOnChangeTrack shift', () => {
        let state;
        state = reducer({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 51,
                line_width: 348,
                sign_time: '01:33 - 12:09 ( 10ч 36мин )'
            }, {
                name: 'Track II',
                start_ms: 10763618,
                end_ms: 19769910,
                line_left: 98,
                line_width: 82,
                sign_time: '02:59 - 05:29 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 108,
                line_width: 396,
                sign_time: '03:18 - 15:22 ( 12ч 04мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 31,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }], sizeCellOfOneHour: 32.77708435058594
        }, {type: 'onChangeTrack', value: {id: 1, left: 98, width: 82}});
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 51,
                line_width: 348,
                sign_time: '01:33 - 12:09 ( 10ч 36мин )'
            }, {
                name: 'Track II',
                start_ms: 10763618,
                end_ms: 19769910,
                line_left: 98,
                line_width: 82,
                sign_time: '02:59 - 05:29 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 108,
                line_width: 396,
                sign_time: '03:18 - 15:22 ( 12ч 04мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 31,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }], sizeCellOfOneHour: 32.77708435058594
        });
    });

    test('reducers servantFileUpload', () => {
        let state;
        state = reducer({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 51,
                line_width: 348,
                sign_time: '01:33 - 12:09 ( 10ч 36мин )'
            }, {
                name: 'Track II',
                start_ms: 10763618,
                end_ms: 19769910,
                line_left: 98,
                line_width: 82,
                sign_time: '02:59 - 05:29 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 108,
                line_width: 396,
                sign_time: '03:18 - 15:22 ( 12ч 04мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 31,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }], sizeCellOfOneHour: 32.77708435058594
        }, {
            type: 'onChangeFiles',
            value: ['627c769aa6c1cc41e31c4e2be719e14e9b0710e811ad01df4bbcc80cf7f88deb.mp3', '29135.mp3', '29907.mp3']
        });
        expect(state).toEqual({
            tracks: [{
                name: 'Track I',
                start_ms: 5580000,
                end_ms: 43776000,
                line_left: 51,
                line_width: 348,
                sign_time: '01:33 - 12:09 ( 10ч 36мин )'
            }, {
                name: 'Track II',
                start_ms: 10763618,
                end_ms: 19769910,
                line_left: 98,
                line_width: 82,
                sign_time: '02:59 - 05:29 ( 02ч 30мин )'
            }, {
                name: 'Track IITrack IITrack IITrack IITrack IITrack II',
                start_ms: 11880000,
                end_ms: 55368000,
                line_left: 108,
                line_width: 396,
                sign_time: '03:18 - 15:22 ( 12ч 04мин )'
            }, {
                name: 'IITrack IITrack IITrack II',
                start_ms: 150000,
                end_ms: 3600000,
                line_left: 1,
                line_width: 31,
                sign_time: '00:03 - 01:00 ( 00ч 57мин )'
            }, {
                name: '627c769aa6c1cc41e31c4e2be719e14e9b0710e811ad01df4bbcc80cf7f88deb.mp3',
                start_ms: 0,
                end_ms: 3600000,
                line_left: 0,
                line_width: 33,
                sign_time: '00:00 - 01:00 ( 01ч 00мин )'
            }, {
                name: '29135.mp3',
                start_ms: 0,
                end_ms: 3600000,
                line_left: 0,
                line_width: 33,
                sign_time: '00:00 - 01:00 ( 01ч 00мин )'
            }, {
                name: '29907.mp3',
                start_ms: 0,
                end_ms: 3600000,
                line_left: 0,
                line_width: 33,
                sign_time: '00:00 - 01:00 ( 01ч 00мин )'
            }], sizeCellOfOneHour: 32.77708435058594
        });
    });


});