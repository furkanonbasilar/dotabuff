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
    itemDetails: {
        information: "",
        name:"",
        passive:"",
        properties:[],
        gold: '',
    },
    navbarContent: [],
    showNavbar: false
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
                itemDetails : {
                    ...state.itemDetails,
                    information: action.information,
                    name: action.name,
                    passive: action.passive,
                    properties: [...action.properties],
                    gold: action.gold
                }
                
            }
        case 'SET_HEROES_NAVBAR':
            return {
                ...state,
                navbarContent: ['Main','Introduction','Statistics'],
                showNavbar: true
            }
        case 'SET_ITEMS_NAVBAR':
            return {
                ...state,
                navbarContent: ['Info','Trivia','Statistics','More'],
                showNavbar: true
            }
        default:
            return state;
    }
}

export default reducer;