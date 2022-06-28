const model = {
    currentPage: 'songs',
    view: '',

    inputs:{
        title:'',
        artist: '',
        album: '',
        duration: '',
        dayesAdded: '',
        img: '',
    },

    logIn:{
        username: '',
        password: '',
        name: '',
    },

    users:[
        {
            username: 'therese',
            password: 'therese',
            name: 'therese',
            // lister: [[1,3,6,8,],[2,5,7,10]] id eller index til sangene
        },
        {
            username: 'truls',
            password: 'therese',
            name: 'kevin',
        },
        
    ],




    spotify: [
        {
           
            title: 'Nessaja',
            artist:  'Scooter',
            album: '20 years',
            duration: '3.28',
            dayesAdded: '26',
            img: 'https://image.shutterstock.com/image-photo/electric-scooter-on-white-background-260nw-1389244025.jpg',
        },
        {
            
            title: 'Come Together',
            artist:  'tara',
            album: 'the voice',
            duration: '2.28',
            dayesAdded: '24',
            img: 'https://www.eventim.no/obj/media/NO-eventim/teaser/evo/artwork/2022/thevoice1240.jpg',
        },


    ]
}