'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  
 let list = [
    "Back Street Girls -GOKUDOLS- | 2018 | TV-MA | 1 Season |   | ",
    "Dumplin' | 2018 | PG-13 | 1h 50m",
    "Little Things | 2018 | TV-MA | 2 Seasons",
    "Animal World | 2018 | TV-MA | 2h 10m",
    "The Little Mermaid | 2018 | PG | 1h 24m",
    "Black Butler | 2010 | TV-14 | 1 Season",
    "Stranger | 2017 | TV-MA | 1 Season",
    "Eternal Love | 2017 | TV-14 | 1 Season",
    "Memories of the Alhambra | 2018 | TV-14 | 1 Season",
    "Aggretsuko | 2018 | TV-14 | 1 Season",
    "The Great British Baking Show | 2018 | TV-PG | 6 Seasons",
    "Dogs | 2018 | TV-PG | 1 Season",
    "She-Ra and the Princesses of Power | 2018 | TV-Y7-FV | 1 Season",
    "Narcos: Mexico | 2018 | TV-MA | 1 Season",
    "Patriot Act with Hasan Minhaj | 2018 | TV-MA | 1 Season",
    "Errementari: The Blacksmith and the Devil | 2018 | TV-MA | 1h 39m",
    "SWORDGAI The Animation | 2018 | TV-MA | 2 Seasons",
    "Illang: The Wolf Brigade | 2018 | TV-MA | 2h 19m",
    "BLAME! | 2017 | TV-14 | 1h 46m",
    "Cyborg 009 VS Devilman | 2015 | TV-14 | 1 Season",
    "The Seven Deadly Sins | 2018 | TV-14 | 3 Seasons",
    "B: The Beginning | 2018 | TV-MA | 1 Season",
    "Devilman Crybaby | 2018 | TV-MA | 1 Season",
    "LOST SONG | 2018 | TV-14 | 1 Season",
    "GHOUL | 2018 | TV-MA | 1 Season",
    "The Rise of Phoenixes | 2018 | TV-14 | 1 Season",
    "A Wrinkle in Time | 2018 | PG | 1h 49m",
    "Forest of Piano | 2018 | TV-PG | 1 Season",
    "The Dragon Prince | 2018 | TV-Y7-FV | 1 Season",
    "Explained | 2018 | TV-MA | 1 Season",
    "Terrace House: Opening New Doors | 2018 | TV-14 | 4 Seasons",
    "Secret Healer | 2016 | TV-14 | 1 Season",
    "Meteor Garden | 2018 | TV-14 | 1 Season",
    "Mr. Sunshine | 2018 | TV-MA | 1 Season",
    "Ouran High School Host Club | 2006 | TV-14 | 1 Season",
    "Sacred Games | 2018 | TV-MA | 1 Season",
    "Circle | 2015 | NR | 1h 26m",
    "Psychokinesis | 2018 | TV-MA | 1h 41m",
    "Reply 1994 | 2014 | TV-14 | 1 Season",
    "Legend of the Naga Pearls | 2017 | TV-MA | 1h 47m",
    "Lost in Space | 2018 | TV-PG | 1 Season",
    "Strong Girl Bong-soon | 2017 | TV-14 | 1 Season",
    "On My Block | 2018 | TV-14 | 1 Season",
    "Troy: Fall of a City | 2018 | TV-MA | 1 Season",
    "The Age of Shadows | 2016 | TV-MA | 2h 20m",
    "FullMetal Alchemist | 2017 | TV-14 | 2h 14m",
    "Kakegurui | 2017 | TV-14 | 1 Season",
    "One Day at a Time | 2018 | TV-PG | 2 Seasons",
    "Kabali (Hindi Version) | 2016 | TV-MA | 2h 28m",
    "Hunterrr | 2015 | TV-MA | 2h 20m",
    "Dangal | 2016 | TV-PG | 2h 40m",
    "The Guardian Brothers | 2016 | TV-Y7-FV | 1h 25m",
    "Seoul Searching | 2015 | TV-MA | 1h 49m",
    "Black | 2017 | TV-MA | 1 Season",
    "Erased | 2017 | TV-14 | 1 Season",
    "Kantaro: The Sweet Tooth Salaryman | 2017 | TV-PG | 1 Season",
    "Half Girlfriend | 2017 | TV-PG | 2h 9m",
    "Jab Harry Met Sejal | 2017 | TV-14 | 2h 22m",
    "Cable Girls | 2018 | TV-MA | 3 Seasons",
    "Vampire Knight | 2008 | TV-14 | 2 Seasons",
    "Marvel's The Punisher | 2017 | TV-MA | 1 Season",
    "Fate/Apocrypha | 2017 | TV-MA | 2 Seasons",
    "Miss Hokusai | 2015 | PG-13 | 1h 30m",
    "Barakah Meets Barakah | 2016 | TV-14 | 1h 28m",
    "My Wife Is a Gangster 3: HK Edition | 2006 | TV-MA | 1h 56m",
    "Jack Whitehall: Travels with My Father | 2018 | TV-MA | 2 Seasons",
    "Cézanne et moi | 2016 | R | 1h 54m",
    "Aroni Takhon | 2017 | TV-PG | 2h 4m",
    "First They Killed My Father | 2017 | TV-MA | 2h 16m",
    "Inside Men | 2015 | TV-MA | 2h 10m",
    "How to Steal a Dog | 2014 | TV-PG | 1h 49m",
    "Star Trek: Voyager | 2000 | TV-PG | 7 Seasons",
    "Neo Yokio | 2018 | TV-MA | 2 Seasons",
    "FINAL FANTASY XIV Dad of Light | 2017 | TV-PG | 1 Season",
    "Million Yen Women | 2017 | TV-MA | 1 Season",
    "Glitter Force Doki Doki | 2017 | TV-Y7 | 2 Seasons",
    "Kuromukuro | 2016 | TV-14 | 2 Seasons",
    "Fairy Tail | 2010 | TV-14 | 1 Season",
    "Baahubali: The Beginning (Hindi Version) | 2015 | TV-14 | 2h 38m",
    "Baahubali 2: The Conclusion (Hindi Version) | 2017 | TV-MA | 2h 45m",
    "Happy New Year | 2014 | TV-14 | 2h 58m",
    "Kurt Seyit ve Şura | 2014 | TV-14 | 1 Season",
    "Gunslinger Girl -Il Teatrino- | 2008 | TV-MA | 1 Season",
    "AJIN: Demi-Human | 2016 | TV-MA | 2 Seasons",
    "Lady Bloodfight | 2016 | R | 1h 40m",
    "Voltron: Legendary Defender | 2018 | TV-Y7-FV | 8 Seasons",
    "Van Helsing | 2017 | TV-MA | 2 Seasons",
    "Little Witch Academia | 2017 | TV-Y7 | 2 Seasons",
    "One-Punch Man | 2015 | TV-14 | 1 Season",
    "Castlevania | 2018 | TV-MA | 2 Seasons",
    "Mahmut & Meryem | 2013 | TV-14 | 1 Season",
    "This Is My Love | 2015 | TV-14 | 1 Season",
    "A Man Called God | 2010 | TV-MA | 1 Season",
    "In Need of Romance | 2011 | TV-14 | 1 Season",
    "28 Moons | 2016 | TV-14 | 1 Season",
    "In Need of Romance 3 | 2014 | TV-14 | 1 Season",
    "My Only Love Song | 2017 | TV-MA | 1 Season",
    "Against the Tide | 2014 | TV-14 | 1 Season",
    "Tunnel | 2016 | TV-14 | 2h 6m",
    "Lucid Dream | 2017 | TV-MA | 1h 41m",
    "GLOW | 2018 | TV-MA | 2 Seasons",
    "Sword Master | 2016 | TV-MA | 1h 47m",
    "Rudhramadevi | 2015 | NR | 2h 30m",
    "Three | 2016 | TV-MA | 1h 28m",
    "Man to Man | 2017 | TV-14 | 1 Season",
    "The Girl King | 2015 | TV-14 | 1h 46m",
    "Rangoon | 2017 | TV-14 | 2h 32m",
    "Mortal Kombat | 1995 | PG-13 | 1h 41m",
    "Parched | 2015 | NR | 1h 56m",
    "The Legend of Drunken Master | 1994 | R | 1h 41m",
    "Tanu Weds Manu | 2011 | TV-14 | 1h 54m",
    "Dear White People | 2018 | TV-MA | 2 Seasons",
    "Wild Arabia | 2013 | TV-PG | 1 Season",
    "Bill Nye Saves the World | 2018 | TV-14 | 3 Seasons",
    "Kaho Naa... Pyaar Hai | 2000 | TV-MA | 2h 42m",
    "Just Like Us | 2010 | R | 1h 11m",
    "Krrish | 2006 | TV-14 | 2h 54m",
    "Good Witch | 2016 | TV-PG | 3 Seasons",
    "Beary Tales | 2013 | TV-G | 51m",
    "Juana Inés | 2016 | TV-14 | 1 Season",
    "iBOY | 2017 | TV-MA | 1h 30m",
    "Ice Fantasy | 2016 | TV-14 | 1 Season",
    "Udta Punjab | 2016 | TV-MA | 2h 25m",
    "Ip Man: The Final Fight | 2013 | PG-13 | 1h 40m | Available until 12/19/18",
    "The 36th Chamber of Shaolin | 1978 | R | 1h 51m",
    "Humsafar | 2011 | TV-14 | 1 Season",
    "Trollhunters: Tales of Arcadia | 2017 | TV-Y7-FV | 3 Seasons",
    "Dark Matter | 2017 | TV-14 | 3 Seasons",
    "Medici | 2016 | TV-14 | 1 Season",
    "Crazyhead | 2016 | TV-MA | 1 Season",
    "Knights of Sidonia | 2015 | TV-MA | 2 Seasons",
    "Divines | 2016 | TV-MA | 1h 47m",
    "13TH | 2016 | TV-MA | 1h 40m",
    "Roman Empire | 2018 | TV-MA | 2 Seasons",
    "Tales by Light | 2016 | TV-PG | 2 Seasons",
    "Wild France with Ray Mears | 2016 | TV-PG | 1 Season",
    "Wild Australia with Ray Mears | 2016 | TV-PG | 1 Season",
    "Dhanak | 2015 | TV-PG | 1h 54m",
    "Witches: A Century of Murder | 2015 | TV-14 | 1 Season",
    "Dukhtar | 2014 | TV-14 | 1h 33m",
    "Cleverman | 2017 | TV-MA | 2 Seasons",
    "Charmed | 2005 | TV-PG | 8 Seasons",
    "Palm Trees in the Snow | 2015 | TV-MA | 2h 43m",
    "Hellboy | 2004 | PG-13 | 2h 1m",
    "The Real Miyagi | 2015 | TV-14 | 1h 21m",
    "What Happened, Miss Simone? | 2015 | TV-14 | 1h 42m",
    "Quartet | 2012 | PG-13 | 1h 38m",
    "Cave of Forgotten Dreams | 2010 | G | 1h 30m",
    "Raja Rasoi Aur Anya Kahaniyan | 2014 | TV-G | 1 Season",
    "Stories by Rabindranath Tagore | 2015 | TV-14 | 1 Season",
    "Delhi in a Day | 2012 | TV-14 | 1h 28m",
    "Heropanti | 2014 | TV-14 | 2h 17m",
    "Singh Is Kinng | 2008 | NR | 2h 10m",
    "Taal | 1999 | TV-PG | 2h 57m",
    "Hum Saath-Saath Hain | 1999 | TV-G | 2h 56m",
    "Ishqiya | 2009 | TV-14 | 2h 9m",
    "Dedh Ishqiya | 2014 | TV-14 | 2h 26m",
    "Holiday - A Soldier Is Never Off Duty | 2014 | NR | 2h 39m",
    "Andaz Apna Apna | 1994 | TV-PG | 2h 39m",
    "John Mulaney: The Comeback Kid | 2015 | TV-MA | 1h 1m",
    "The Twilight Zone (Original Series) | 1963 | TV-PG | 4 Seasons",
    "Lost Girl | 2015 | TV-14 | 5 Seasons",
    "The Paradise | 2013 | TV-PG | 2 Seasons",
    "Twin Peaks | 1990 | TV-MA | 2 Seasons",
    "Black Mirror | 2017 | TV-MA | 4 Seasons",
    "Z Nation | 2017 | TV-14 | 4 Seasons",
    "Helix | 2015 | TV-MA | 1 Season",
    "Spartacus | 2013 | TV-MA | 4 Seasons",
    "Hidden Kingdoms | 2014 | TV-PG | 1 Season",
    "Strange Empire | 2015 | TV-14 | 1 Season",
    "Miss Fisher's Murder Mysteries | 2015 | TV-14 | 3 Seasons",
    "Death Comes to Pemberley | 2013 | TV-MA | 1 Season | Available until 12/28/18",
    "The Great Train Robbery | 2013 | TV-MA | 1 Season",
    "Atelier | 2015 | TV-PG | 1 Season",
    "La Viuda Negra | 2016 | TV-14 | 2 Seasons",
    "Star Trek: The Next Generation | 1993 | TV-PG | 7 Seasons",
    "Bob Ross: Beauty Is Everywhere | 1991 | TV-G | 1 Season",
    "Madras Café | 2013 | TV-MA | 2h 8m",
    "Inkaar | 2013 | TV-MA | 2h 5m",
    "Boss | 2013 | TV-14 | 2h 18m",
    "Special 26 | 2013 | TV-PG | 2h 16m",
    "Race | 2008 | TV-14 | 2h 34m",
    "Race 2 | 2013 | TV-14 | 2h 18m",
    "Kismat Konnection | 2008 | TV-PG | 2h 24m",
    "Action Replayy | 2010 | TV-PG | 2h 9m",
    "Rowdy Rathore | 2012 | TV-MA | 2h 16m",
    "Luv Shuv Tey Chicken Khurana | 2012 | TV-14 | 2h 9m",
    "Chup Chup Ke | 2006 | TV-14 | 2h 37m",
    "Life in a ... Metro | 2007 | TV-14 | 2h 5m",
    "Fiza | 2000 | TV-14 | 2h 42m",
    "The Inexplicable Universe with Neil deGrasse Tyson | 2013 | TV-14 | 1 Season",
    "Kai Po Che! | 2013 | TV-14 | 1h 59m",
    "Fashion | 2008 | TV-MA | 2h 37m",
    "Kahaani | 2012 | TV-14 | 2h 1m",
    "Heroine | 2012 | TV-MA | 2h 22m",
    "We Are Family | 2010 | TV-PG | 1h 58m",
    "Kaminey | 2009 | TV-MA | 2h 8m",
    "Kidnap | 2008 | TV-14 | 2h 21m",
    "Ek Main Aur Ekk Tu | 2012 | TV-14 | 1h 45m",
    "Rang De Basanti | 2006 | TV-MA | 2h 39m",
    "Udaan | 2010 | TV-MA | 2h 17m",
    "ABCD: Any Body Can Dance | 2013 | TV-14 | 2h 16m",
    "Satyagraha | 2013 | TV-14 | 2h 26m",
    "Oh My God | 2012 | TV-PG | 2h 8m"
  ]

 
  
  $scope.loadList = () => {
    var storedList = JSON.parse(localStorage["myList"]); 
    //var storedWatchList = JSON.parse(localStorage["watchList"]); 
    $scope.myList = storedList || [];
    //$scope.watchList = storedWatchList || [];
  }


  $scope.save = () => {
    localStorage["myList"] = JSON.stringify($scope.myList);
    //localStorage["watchList"] = JSON.stringify($scope.watchList);
  }
  

  $scope.listing = '';
  $scope.isTV = false;
  $scope.isFilm = false;

  $scope.results = [];

  $scope.filter = '';

  $scope.changeFilter = (str) => {
    $scope.filter = str;
  }

  $scope.addToList = (item) => {

    if ($scope.isTV) {
      item.category = "tv";
    }

    if ($scope.isFilm) {
      item.category = "film";
    }

    item.image = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    $scope.myList.push(item);
  }

  $scope.addToWatchList = (item) => {
    item.image = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    $scope.watchList.push(item);

    $scope.removeItem(item);
    console.log("added to watchlist=>", $scope.watchList);
  }

  const api_key = '8593a3b4d8e63ba14e0c59a74c9bd987';

  $scope.submit = () => {
   
    let category = '';

    if ($scope.isTV === true) {
      category = "tv";
    } 
    
    if ($scope.isFilm === true) {
      category = "movie";
    }

    $http.get('https://api.themoviedb.org/3/search/' + category + '?api_key=' + api_key + '&language=en-US&page=1&query=' + $scope.listing)
    .then(data => {
      $scope.results = data.data.results;
    }, (error) => {console.error});
  }

  
  let length = (h, m) => {
    return (h * 60) + m;
  }

  $scope.filterFn = function(item)
{

    if(item.category === $scope.filter || item.original_language === $scope.filter || $scope.filter === '')
    {
        return true; 
    }

    return false; 
};

$scope.removeItem = (item) => {
  var index = $scope.myList.indexOf(item);
  if(index>=0) {
    $scope.myList.splice(index, 1);
  }
    console.log("removed-->", item)
    console.log("new=", $scope.myList)
}



}]);