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
 * https://api.themoviedb.org/3/movie/550?api_key=ed3ffec3f676dd0b389af40884385f36
 * 
 */


var theMovieDb = {};

theMovieDb.config = {
    api_key: 'ed3ffec3f676dd0b389af40884385f36', // v3
    api_url: 'http://api.themoviedb.org/3/',
    img_url: 'http://image.tmdb.org/t/p/',
    img_default_size: 'w500',
    timeout: 5000
};