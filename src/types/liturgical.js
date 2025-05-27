// Un objet JavaScript qui associe à chaque saison liturgique 
// (temps ordinaire, avent, carême, noël, etc.) un ensemble de propriétés de thème.

export const liturgicalThemes = {

    ordinary: {
        name: 'Ordinaire',
        color: 'liturgical-green',
        textColor: 'text-liturgical-green-800',
        textColorSecond: 'text-liturgical-green-500', // Couleur du texte voirplus  
        bgColor: 'bg-liturgical-green-500',
        bgColorSecond: 'bg-liturgical-green-50',
        accentColor: 'border-liturgical-green-500',
        hoverBgColor: 'hover:bg-liturgical-green-50',
        hoverShadowColor: 'hover:shadow-liturgical-green-300',
        ringColor: 'focus:ring-liturgical-green-500',
        seasonName: 'Temps Ordinaire'
    },
    christKing: {
        name: 'Christ Roi',
        color: 'liturgical-white',
        textColor: 'text-liturgical-white-800',
        textColorSecond: 'text-liturgical-white-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-white-500',
        bgColorSecond: 'bg-liturgical-white-200',
        hoverBgColor: 'hover:bg-liturgical-white-200',
        hoverShadowColor: 'hover:shadow-liturgical-white-500',
        accentColor: 'border-liturgical-white-500',
        ringColor: 'focus:ring-liturgical-white-500',
        seasonName: 'Christ Roi'
    },
    advent: {
        name: 'Avent',
        color: 'liturgical-violet',
        textColor: 'text-liturgical-violet-800',
        textColorSecond: 'text-liturgical-violet-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-violet-500',
        bgColorSecond: 'bg-liturgical-violet-50',
        hoverBgColor: 'hover:bg-liturgical-violet-50',
        hoverShadowColor: 'hover:shadow-liturgical-violet-300',
        accentColor: 'border-liturgical-violet-500',
        ringColor: 'focus:ring-liturgical-violet-500',
        seasonName: "Temps de l'Avent"
    },
    joySundayAdvent: {
        name: 'Gaudete',
        color: 'liturgical-rose',
        textColor: 'text-liturgical-rose-800',
        textColorSecond: 'text-liturgical-rose-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-rose-500',
        bgColorSecond: 'bg-liturgical-rose-50',
        hoverBgColor: 'hover:bg-liturgical-rose-50',
        hoverShadowColor: 'hover:shadow-liturgical-rose-300',
        accentColor: 'border-liturgical-rose-500',
        ringColor: 'focus:ring-liturgical-rose-500',
        seasonName: 'Dimanche de la Joie (Avent)'
    },
    christmas: {
        name: 'Noël',
        color: 'liturgical-white',
        textColor: 'text-liturgical-white-800',
        textColorSecond: 'text-liturgical-white-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-white-500',
        bgColorSecond: 'bg-liturgical-white-200',
        hoverBgColor: 'hover:bg-liturgical-white-200',
        hoverShadowColor: 'hover:shadow-liturgical-white-500',
        accentColor: 'border-liturgical-white-500',
        ringColor: 'focus:ring-liturgical-white-500',
        seasonName: 'Temps de Noël'
    },
    ashWednesday: {
        name: 'Début Carême',
        color: 'liturgical-violet',
        textColor: 'text-liturgical-violet-800',
        textColorSecond: 'text-liturgical-violet-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-violet-500',
        bgColorSecond: 'bg-liturgical-violet-50',
        hoverBgColor: 'hover:bg-liturgical-violet-50',
        hoverShadowColor: 'hover:shadow-liturgical-violet-300',
        accentColor: 'border-liturgical-violet-500',
        ringColor: 'focus:ring-liturgical-violet-500',
        seasonName: 'Mercredi des Cendres'
    },
    lent: {
        name: 'Carême',
        color: 'liturgical-violet',
        textColor: 'text-liturgical-violet-800',
        textColorSecond: 'text-liturgical-violet-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-violet-500',
        bgColorSecond: 'bg-liturgical-violet-50',
        hoverBgColor: 'hover:bg-liturgical-violet-50',
        hoverShadowColor: 'hover:shadow-liturgical-violet-300',
        accentColor: 'border-liturgical-violet-500',
        ringColor: 'focus:ring-liturgical-violet-500',
        seasonName: 'Temps de Carême'
    },
    joySundayLent: {
        name: 'Laetare',
        color: 'liturgical-rose',
        textColor: 'text-liturgical-rose-800',
        textColorSecond: 'text-liturgical-rose-500', // Couleur du texte voirplus            
        bgColor: 'bg-liturgical-rose-500',
        bgColorSecond: 'bg-liturgical-rose-50',
        hoverBgColor: 'hover:bg-liturgical-rose-50',  
        hoverShadowColor: 'hover:shadow-liturgical-rose-300',
        accentColor: 'border-liturgical-rose-500',
        ringColor: 'focus:ring-liturgical-rose-500',
        seasonName: 'Dimanche de la Joie (Carême)'
    },
    palms: {
        name: 'Rameaux',
        color: 'liturgical-red',
        textColor: 'text-liturgical-red-800',
        textColorSecond: 'text-liturgical-red-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-red-500',
        bgColorSecond: 'bg-liturgical-red-50',
        hoverBgColor: 'hover:bg-liturgical-red-50',
        hoverShadowColor: 'hover:shadow-liturgical-red-300',
        accentColor: 'border-liturgical-red-500',
        ringColor: 'focus:ring-liturgical-red-500',
        seasonName: 'Dimanche des Rameaux'
    },
    holyThursday: {
        name: 'Jeudi Saint',
        color: 'liturgical-white',
        textColor: 'text-liturgical-white-800',
        textColorSecond: 'text-liturgical-white-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-white-500',
        bgColorSecond: 'bg-liturgical-white-200',
        hoverBgColor: 'hover:bg-liturgical-white-200',
        hoverShadowColor: 'hover:shadow-liturgical-white-500',
        accentColor: 'border-liturgical-white-500',
        ringColor: 'focus:ring-liturgical-white-500',
        seasonName: 'Jeudi Saint'
    },
    goodFriday: {
        name: 'Vendredi Saint',
        color: 'liturgical-red',
        textColor: 'text-liturgical-red-800',
        textColorSecond: 'text-liturgical-red-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-red-500',
        bgColorSecond: 'bg-liturgical-red-50',
        hoverBgColor: 'hover:bg-liturgical-red-50',
        hoverShadowColor: 'hover:shadow-liturgical-red-300',
        accentColor: 'border-liturgical-red-500',
        ringColor: 'focus:ring-liturgical-red-500',
        seasonName: 'Vendredi Saint'
    },
    easter: {
        name: 'Pâques',
        color: 'liturgical-white',
        textColor: 'text-liturgical-white-800',
        textColorSecond: 'text-liturgical-white-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-white-500',
        bgColorSecond: 'bg-liturgical-white-200',
        hoverBgColor: 'hover:bg-liturgical-white-200',
        hoverShadowColor: 'hover:shadow-liturgical-white-500',
        accentColor: 'border-liturgical-white-500',
        ringColor: 'focus:ring-liturgical-white-500',
        seasonName: 'Temps Pâscal'
    },
    pentecost: {
        name: 'Pentecôte',
        color: 'liturgical-red',
        textColor: 'text-liturgical-red-800',
        textColorSecond: 'text-liturgical-red-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-red-500',
        bgColorSecond: 'bg-liturgical-red-50',
        hoverBgColor: 'hover:bg-liturgical-red-50',
        hoverShadowColor: 'hover:shadow-liturgical-red-300',
        accentColor: 'border-liturgical-red-500',
        ringColor: 'focus:ring-liturgical-red-500',
        seasonName: 'Pentecôte'
    },

    marian: {
        name: 'Fête Mariale',
        color: 'liturgical-blue',
        textColor: 'text-liturgical-blue-800',
        textColorSecond: 'text-liturgical-blue-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-blue-500',
        bgColorSecond: 'bg-liturgical-blue-50',
        hoverBgColor: 'hover:bg-liturgical-blue-50',
        hoverShadowColor: 'hover:shadow-liturgical-blue-300',   
        accentColor: 'border-liturgical-blue-500',
        ringColor: 'focus:ring-liturgical-blue-500',
        seasonName: 'Fête Mariale'
    },
    // TOUSSAINT
    allSaints: {
        name: 'Toussaint',
        color: 'liturgical-white',
        textColor: 'text-liturgical-white-800',
        textColorSecond: 'text-liturgical-white-500', // Couleur du texte voirplus
        bgColor: 'bg-liturgical-white-500',
        bgColorSecond: 'bg-liturgical-white-200',
        hoverBgColor: 'hover:bg-liturgical-white-200',
        hoverShadowColor: 'hover:shadow-liturgical-white-500',
        accentColor: 'border-liturgical-white-500',
        ringColor: 'focus:ring-liturgical-white-500',
        seasonName: 'Toussaint'
    },
    // Ascension
    // ascension: {
    //     name: 'Ascension',
    //     color: 'liturgical-white',
    //     textColor: 'text-liturgical-white-800',
    //     bgColor: 'bg-liturgical-white-500',
    //     accentColor: 'border-liturgical-white-500',
    //     ringColor: 'focus:ring-liturgical-white-500',
    //     seasonName: 'Ascension'
    // },
    // Trinité
    // trinity: {
    //     name: 'Trinité',
    //     color: 'liturgical-white',
    //     textColor: 'text-liturgical-white-800',
    //     bgColor: 'bg-liturgical-white-500',
    //     accentColor: 'border-liturgical-white-500',
    //     ringColor: 'focus:ring-liturgical-white-500',
    //     seasonName: 'Trinité'
    // },
    // Fête du Saint Sacrement
    // holyEucharist: {
    //     name: 'Fête du Saint Sacrement',
    //     color: 'liturgical-white',
    //     textColor: 'text-liturgical-white-800',
    //     bgColor: 'bg-liturgical-white-500',
    //     accentColor: 'border-liturgical-white-500',
    //     ringColor: 'focus:ring-liturgical-white-500',
    //     seasonName: 'Fête du Saint Sacrement'
    // },
    // dimanche de la  transfiguration
    // transfiguration: {
    //     name: 'Dimanche de la Transfiguration',
    //     color: 'liturgical-white',
    //     textColor: 'text-liturgical-white-800',
    //     bgColor: 'bg-liturgical-white-500',
    //     accentColor: 'border-liturgical-white-500',
    //     ringColor: 'focus:ring-liturgical-white-500',
    //     seasonName: 'Dimanche de la Transfiguration'
    // },

};