var Twitter = require('twitter');
var config = require('./config.js');
var client = new Twitter(config);

// setup search params
var params = {
    q: '#flutterio',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

client.get('search/tweets', params, function(error, data, response) {
    if(!error) {
        for(let i = 0; i < data.statuses.length; i++)  {
            // get tweet id
            // console.log(response)
            let id = data.statuses[i].id_str
            let tweet = data.statuses[i].text
            console.log(`${id} -> ${tweet}`)
            // T.post('favorites/create', id, function(err, response){
            //     // If the favorite fails, log the error message
            //     if(err){
            //       console.log(err[0].message);
            //     }
            //     // If the favorite is successful, log the url of the tweet
            //     else{
            //       let username = response.user.screen_name;
            //       let tweetId = response.id_str;
            //       console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
            //     }
            // });
        }
    }
    console.log(error);
})
