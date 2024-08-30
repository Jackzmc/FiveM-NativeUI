export async function getTextInput(maxLength?: number): Promise<string> {
    DisplayOnscreenKeyboard( 1, "FMMC_MPM_NA", "", "", "", "", "", maxLength );
    let state = UpdateOnscreenKeyboard()
    while ( state === 0 ) {
        state = UpdateOnscreenKeyboard();
        await sleep(100)
    }
    if ( state == 1 ) {
        const result = GetOnscreenKeyboardResult();
        if ( result != null ) {
            return result
        }
    }
    return null
}
function sleep( ms: number ) { return new Promise( res => setTimeout( res, ms ) ) }