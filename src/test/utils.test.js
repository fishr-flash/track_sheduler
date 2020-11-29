describe( 'all tests', ()=>{

    test( "typeof of number", ()=>{
        const a = NaN;
        expect(  isNaN( a )).toBe( true );
        expect(  a ).toBe( NaN );
    });

});