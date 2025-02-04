export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after development
    //token: "BQCTp_dEnLLMjCMRxiIgwJlu8MIFavwI6KPua8VOXrgiCuGaPdI7F5l3bRDtoBRUntaZfyEM3xirGV-f5W9bHpSa1_lGm7wHzDJnkcOuDOVazFIzHcEC2vjGJpP8-WnWm-kBKCKiY0y2fOQYBVmKjUpCanVoXRUFk42I9zNo84UE2PNkgny7PR74BYughHDBX3DGxO3iayNVitU",
};

const reducer = (state, action) => {
    console.log(action);

    // Action has a type (string indicates the action to perform) and a [payload] (additional data needed to perform action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        
        default:
            return state;
    }
}

export default reducer;