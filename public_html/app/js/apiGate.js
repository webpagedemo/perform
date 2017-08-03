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

/**
 * Render obj
 * Obj render elements whit api data
 * 
 * @type obj
 */
gateTheMovieDb.render = {
    resultContainer: {},
    apiLib: {},
    setAlias: function() {
        this.resultContainer    = gateTheMovieDb.config.result_container;
        this.apiLib             = gateTheMovieDb.config.lib_obj;
    },
    getView: function(data) {
        // clear content
        this.resultContainer.innerHTML = '';
                
        var resultData = JSON.parse(data);
        
        // set title
        var titleContainer  = document.createElement('h1');
        var titleText       = document.createTextNode('All result find: ' + resultData.total_results);
        titleContainer.appendChild(titleText);
        
        this.resultContainer.appendChild(titleContainer);

        // get items
        if(resultData.results.length > 0) {
            for(var i = 0; i < resultData.results.length; i++) {
                
                var itemContainer       = document.createElement('div');
                var itemTitleContainer  = document.createElement('div');
                var itemImgContainer    = document.createElement('div');
                var itemImg             = document.createElement('img');
                var itemTitleText       = document.createTextNode(resultData.results[i].title);
                var imageOption         = {'size':'w185_and_h278_bestv2','file':resultData.results[i].poster_path};
                var imgSrcData          = this.apiLib.common.getImage(imageOption);

                itemContainer.setAttribute('id',resultData.results[i].id);
                itemImg.setAttribute('src',imgSrcData);
                
                itemTitleContainer.appendChild(itemTitleText);
                itemImgContainer.appendChild(itemImg);
                
                itemContainer.appendChild(itemTitleContainer);
                itemContainer.appendChild(itemImgContainer);

                this.resultContainer.appendChild(itemContainer);
                
            }
        }
        
    }
};

/**
 * Message obj
 * Obj has callback messages method to use on api lib
 * 
 * @type obj
 */
gateTheMovieDb.message = {
    onSuccess: function(data) {
        console.log('success');        
        gateTheMovieDb.render.getView(data);
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