/**
 * Events whitch set actions on search, list, etc.
 */

window.onload = function() {
    
    var searchButton = document.getElementsByClassName("search__button");
    var searchField  = document.getElementsByClassName("search__field");
    var searchResult = document.getElementsByClassName("search__result");
    
      ///////////////
     // config gate
    ///////////////
    
        gateTheMovieDb.config.setLib(theMovieDb);
        gateTheMovieDb.config.setKey('ed3ffec3f676dd0b389af40884385f36');
        gateTheMovieDb.config.sendKeyToLib();
        gateTheMovieDb.config.setResultContainer(searchResult[0]);
    
      //////////////////////////
     // comunication whit gate
    //////////////////////////
    
        gateTheMovieDb.comunication.setAlias();
        // gateTheMovieDb.comunication.getLibConfig();
        // gateTheMovieDb.comunication.getLibMulti({'query':'Jack+Reacher'});
    
        searchButton[0].addEventListener('click', function(){
            gateTheMovieDb.comunication.getLibMulti({'query':searchField[0].value});
        });
        
      /////////////////
     // render result
    /////////////////
    
        gateTheMovieDb.render.setAlias();
    
}