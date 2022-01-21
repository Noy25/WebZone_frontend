const txtStyle = {
    'color': 'black',
    'textAlign': 'start',
    'textDecoration': 'none',
    'textShadow': 'none',
    'fontFamily': 'Poppins',
    'fontWeight': '400',
    'fontSize': '16',
    'fontStyle': 'normal',
    'letterSpacing': '1',
    // 'lineHeight': '16',
};
const btnStyle = {
    ...txtStyle,
    "borderRadius": "0",
    "backgroundColor": ""
};


const initialState = {
    wap: {
        "_id": "5e28393890dd7201a06d4e44",
        "name": "HairDresser Baluta Marketing Site",
        "createdBy": {
            "_id": "5e26e0b718a0891d4c995527",
            "username": "Hekro Special"
        },
        "cmps": [
            {
                "id": "dhetv6",
                "type": "container",
                "category": "wap-hero",
                "name": "wap-hero-1",
                "style": {
                    "backgroundImage": "url(\"https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\")",
                },
                "cmps": [
                    {
                        "id": "sahd6dd",
                        "type": "container",
                        "style": {},
                        "cmps": [
                            {
                                "id": "3ss66dg",
                                "type": "txt",
                                "txt": "Pacifico",
                                "style": {
                                    ...txtStyle,
                                    "color": "white",
                                    "fontWeight": "700",
                                    "fontSize": "40",
                                    "textShadow": "5px 5px 3px black",
                                    "fontFamily": "kalam",
                                }
                            },
                            {
                                "id": "33377fhd",
                                "type": "container",
                                "style": {},
                                "cmps": [
                                    {
                                        "id": "sdhuf34f",
                                        "type": "btn",
                                        "url": "#",
                                        "txt": "About us",
                                        "style": {
                                            ...btnStyle,
                                            "color": "white",
                                            "textAlign": "center",
                                            "textShadow": "5px 5px 3px black",
                                            "fontFamily": "bitter",
                                        }
                                    },
                                    {
                                        "id": "ffhg74",
                                        "type": "btn",
                                        "url": "#",
                                        "txt": "Reservations",
                                        "style": {
                                            ...btnStyle,
                                            "color": "white",
                                            "textAlign": "center",
                                            "textShadow": "5px 5px 3px black",
                                            "fontFamily": "bitter",
                                        }
                                    },
                                    {
                                        "id": "sssllka9",
                                        "type": "btn",
                                        "url": "#",
                                        "txt": "Login",
                                        "style": {
                                            ...btnStyle,
                                            "color": "white",
                                            "textShadow": "5px 5px 3px black",
                                            "fontFamily": "bitter",
                                        }
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        "id": "8shjhs",
                        "type": "container",
                        "style": {},
                        "cmps": [
                            {
                                "id": "1109f7s",
                                "type": "txt",
                                "txt": "Adventure is worthwhile.",
                                "style": {
                                    ...txtStyle,
                                    "color": "white",
                                    "textAlign": "center",
                                    "fontSize": "65",
                                    "letterSpacing": "1",
                                    "textShadow": "1px 1px 3px black",
                                    "fontFamily": "bitter",
                                }
                            },
                            {
                                "id": "127shsa",
                                "type": "txt",
                                "txt": `You don\'t have to be rich to travel well.`,
                                "style": {
                                    ...txtStyle,
                                    "color": "white",
                                    "textAlign": "center",
                                    "fontSize": "30",
                                    "textShadow": "1px 1px 3px black",
                                    "fontFamily": "bitter"
                                }
                            },
                            {

                                "id": "sscvnjf8",
                                "type": "btn",
                                "url": "https://www.google.com",
                                "txt": "Order now",
                                "style": {
                                    ...btnStyle,
                                    "backgroundColor": "#f1ffff",
                                    "textAlign": "center",
                                    "fontSize": "30",
                                    "fontFamily": "bitter",
                                    "borderRadius": '1000'
                                }
                            },
                        ]
                    }
                ]
            },
        ],
        "isPublished": true
    }
}




export function wapReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_WAP':
            return newState = { ...state, wap: [...action.wap] };
        case 'UPDATE_WAP':
            return newState = { ...state, wap: { ...action.wap } };
        case 'ADD_ELEMENT':
            return newState = { ...state, wap: { ...state.wap, cmps: [...state.wap.cmps, action.elementToAdd] } };
        default:
            return newState;
    }
}