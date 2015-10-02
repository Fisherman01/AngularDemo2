(function(){
  var app = angular.module('angularDemo2', []);

  app.controller('DemoController', function(){
    this.vehicles = tanks;
  });

  app.controller('TabController', function(){
      this.tab = 1;

      this.setTab = function(newValue){
        this.tab = newValue;
      };

      this.isSet = function(tabName){
        return this.tab === tabName;
      }
  });


  var tanks = [
      {
       name: 'Tiger1',
       price: 10000,
       description: 'Tiger is the common name of a German heavy tank developed in 1942 and used in World War II. The final official German designation was Panzerkampfwagen VI Tiger Ausf. E, often shortened to Tiger.',
       specs: 'gun: 8.8 cm KwK 36 L/56',
       images: [
         "pics/Tiger1.jpg",
         "pics/Tiger2.jpg",
         "pics/Tiger3.jpg"
         ]
      },
      {
       name: 'Panther',
       price: 20000,
       description: 'The Panther was a German medium tank deployed during World War II from mid-1943 to the end of the European war in 1945.',
       specs: 'gun: 7.5 cm KwK 42 L/70',
       images: [
          "pics/Panther1.jpg",
          "pics/panther2.jpg",
          "pics/panther3.jpg"
          ]
      },
      {
       name: 'Jagdpanther',
       price: 30000,
       description: 'The Jagdpanther (German: "hunting panther") was a tank destroyer built by Nazi Germany during World War II based on the chassis of the Panther tank.',
       specs: 'gun: 8.8 cm Pak 43/3 or 43/4 L/71',
       images: [
           "pics/jagdpanther1.jpg",
           "pics/Jagdpanther2.jpg",
           "pics/jagdpanther3.jpg"
           ]
      }
  ];

})();
