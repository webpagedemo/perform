/* 
 * Author: Tomasz Pucek
 * License: MIT
 * Version: 0.0.1
 * 
 * Przeczytaj kod odczytu API (v4 auth)
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDNmZmVjM2Y2NzZkZDBiMzg5YWY0MDg4NDM4NWYzNiIsInN1YiI6IjU5ODIxNDI4YzNhMzY4MGNmYjAxODFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVOv0C_kXX5ULT9Zn4wJWUlXtK702rzHJbgjc7r1jac
 * 
 * Klucz API (v3 auth)
 * ed3ffec3f676dd0b389af40884385f36
 * 
 * Przykład zapytania API
 * htgates://api.themoviedb.org/3/movie/550?api_key=ed3ffec3f676dd0b389af40884385f36
 * 
 */

gateTheMovieDb = {};

gateTheMovieDb.config = {
    lib_obj: {},
    api_key: 'YOUR_API_KEY',
    
    setLib: function(libObj) {
        gateTheMovieDb.config.lib_obj = libObj;
    },
    setKey: function(apiKey) {
        this.api_key = apiKey;
    },
    sendKeyToLib: function() {
        this.lib_obj.common.api_key = this.api_key;
    }
};

gateTheMovieDb.message = {
    onSuccess: function(data) {
        console.log('success');
        console.log(data);
    },
    onError: function(data) {
        console.log('error');
        console.log(data);
    }
};

gateTheMovieDb.comunication = {
    apiLib: gateTheMovieDb.config.lib_obj,
    message: gateTheMovieDb.message,
    getLibConfig: function() {
        
        var gateMessage = gateTheMovieDb.message;
        
        return  this.apiLib.configurations.getConfiguration(
                    this.message.onSuccess, 
                    this.message.onError
                );
    },
    getLibList: function(options) {
        this.apiLib.search.getList(
                options, 
                this.message.onSuccess, 
                this.message.onError
        );
    }
};

/*
gateTheMovieDb.comunication = {
    
};

gateTheMovieDb.message = {
    onSuccess: function(data) {
        console.log('success');
        console.log(data);
    },
    onError: function(data) {
        console.log('error');
        console.log(data);
    }
};

theMovieDb.common.api_key = 'ed3ffec3f676dd0b389af40884385f36';

function success(data) {
    console.log(data);
}

function error(data) {
    console.log(data);
}
theMovieDb.configurations.getConfiguration(success, error);
*/
//var params = {'query':'Jack+Reacher'};
//var generateQuery = theMovieDb.common.generateQuery(params);

//theMovieDb.common.getLists();