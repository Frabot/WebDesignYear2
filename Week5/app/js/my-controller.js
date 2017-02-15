angular.module('app')
    .controller('myController', ['$scope', function ($scope) {
        "use strict";
        $scope.articles = [
            {
                title : "The War of the Worlds Bk",
                author : "H. G. Wells",
                articleBlog : 'No one in London knew positively of the nature of the armoured Martians, and there was still a fixed idea that these monsters must be sluggish: "crawling," "creeping painfully"--such expressions occurred in almost all the earlier reports. None of the telegrams could have been written by an eyewitness of their advance. The Sunday papers printed separate editions as further news came to hand, some even in default of it. But there was practically nothing more to tell people until late in the afternoon, when the authorities gave the press agencies the news in their possession. It was stated that the people of Walton and Weybridge, and all the district were pouring along the roads Londonward, and that was all.'
            },
            {
                title : "Alice in Wonderland",
                author : "Lewis Carroll",
                articleBlog : "It was so long since she had been anything near the right size, that it felt quite strange at first; but she got used to it in a few minutes, and began talking to herself, as usual. 'Come, there's half my plan done now! How puzzling all these changes are! I'm never sure what I'm going to be, from one minute to another! However, I've got back to my right size: the next thing is, to get into that beautiful garden—how IS that to be done, I wonder?' As she said this, she came suddenly upon an open place, with a little house in it about four feet high. 'Whoever lives there,' thought Alice, 'it'll never do to come upon them THIS size: why, I should frighten them out of their wits!' So she began nibbling at the righthand bit again, and did not venture to go near the house till she had brought herself down to nine inches high."
            },
            {
                title : "A Princess of Mars",
                author : "Edgar Rice Burroughs",
                articleBlog : "I lay facing the opening of the cave and where I could see the short stretch of trail which lay between the cave and the turn of the cliff around which the trail led. The noise of the approaching horses had ceased, and I judged the Indians were creeping stealthily upon me along the little ledge which led to my living tomb. I remember that I hoped they would make short work of me as I did not particularly relish the thought of the innumerable things they might do to me if the spirit prompted them."
            }
            ];
    }]);