$(document).ready(function() {


   var userFeed = new Instafeed({

    get: "tagged",
    tagName:"keya_osiemo",
    clientId: "81aa279f1b0c4c6a88bb86d4334803ce",
       // get: 'user',
       // userId: '1614257873',
      //  limit: 12,
       // resolution: 'standard_resolution',
       // accessToken: '0c763075b3d24f529e80a0dd07f146bd',
       // sortBy: 'most-recent',
       // template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});