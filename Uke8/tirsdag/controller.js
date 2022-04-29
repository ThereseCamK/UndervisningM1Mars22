function addSong(){
   
    model.spotify.push({
        title: 'Therese er kul',
        //model.inputs.title
        artist:  'Therese',
        album: 'Best of Therese',
        duration: '5.0',
        dayesAdded: '0',
        img: 'https://media-exp1.licdn.com/dms/image/C4D03AQE1mmqGxbpL9g/profile-displayphoto-shrink_200_200/0/1628256971536?e=2147483647&v=beta&t=72PC9qzIsU1x0at_iaD_7X-R-AF07tM_AdStPakJlBg',
    })

    updateView()
}