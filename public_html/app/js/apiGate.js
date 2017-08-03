/* 
 * Author: Tomasz Pucek
 * License: MIT
 * Version: 0.0.1
 * 
 */

gateTheMovieDb = {};

/**
 * Config obj
 * Obj has config data and methods to set lib
 * 
 * @type obj
 */
gateTheMovieDb.config = {
    lib_obj: {},
    api_key: 'YOUR_API_KEY',
    result_container: {},
    
    setLib: function(libObj) {
        gateTheMovieDb.config.lib_obj = libObj;
    },
    setKey: function(apiKey) {
        this.api_key = apiKey;
    },
    sendKeyToLib: function() {
        this.lib_obj.common.api_key = this.api_key;
    },
    setResultContainer: function(item) {
        this.result_container = item;
    }
};


gateTheMovieDb.render = {
    
};

/**
 * Message obj
 * Obj has callback messages method to use on api lib
 * 
 * @type obj
 */
gateTheMovieDb.message = {
    resultContainer: {},
    setAlias: function() {
        this.resultContainer  = gateTheMovieDb.config.result_container;
    },
    onSuccess: function(data) {
        this.resultContainer = data;
    },
    onError: function(data) {
        console.error(data);
    }
};

/**
 * Comunication obj
 * Obj has methods to comunication whit api
 * 
 * @type obj
 */
gateTheMovieDb.comunication = {
    apiLib: '',
    message: '',
    setAlias: function() {
        this.apiLib  = gateTheMovieDb.config.lib_obj;
        this.message = gateTheMovieDb.message;
    },
    getLibConfig: function() {
        
        return  this.apiLib.configurations.getConfiguration(
                    this.message.onSuccess, 
                    this.message.onError
                );
    },
    getLibMulti: function(options) {
        this.apiLib.search.getMulti(
                options, 
                this.message.onSuccess, 
                this.message.onError
        );
    }
};