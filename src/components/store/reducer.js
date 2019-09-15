const initialState = {
    heroDetails: {
        id:null,
        name:"Abaddon",
        primary:"",
        spellInfoQ:"",
        spellInfoW:"",
        spellInfoE:"",
        spellInfoR:"",
    },
    show: false,
    information: "",
    name:"",
    passive:"",
    properties:[],
    gold: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HERODETAILS':
            return {
                ...state,
                heroDetails: action.details
            }
        case 'SET_MODALTRUE':
            return {
                ...state,
                show: true
            }
        case 'SET_MODALFALSE':
            return {
                ...state,
                show: false
            }
        case 'SET_POPOVER':
            return {
                ...state,
                information: action.information,
                name: action.name,
                passive: action.passive,
                properties: [...action.properties],
                gold: action.gold
            }
        default:
            return state;
    }
}

export default reducer;