export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after development
    token: 'BQBwwiaTW5HUHbki2eeqeKWRog_xlpBCF7foWoIZhP1rLabpDAgtCnaLWEaU2alhHvxEPCuBKQtNihKYfXpsxxDW4qLD3r6wK74A9p0GFatXKNaoPry5BGf41HdkrdD0kh3ExauMFyq91SZKgWqfXDmC-LKxjUCpVgMigOgPVaJK5p0XTf1zvJXC9xXbw8huHPkd',
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
        default:
            return state;
    }
}

export default reducer;