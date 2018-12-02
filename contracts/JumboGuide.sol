contract JumboGuide {
    // enum Categories {Korean, Chinese, Japanese, Russian}
    
    struct Review {
        address writer;
        string image;
        string body;
        int256 score;
    }
    
    struct Restaurant {
        string image;
        string name;
        string location;
        // Categories category;
        uint8 numJumbo;
        int256 score;
    }
    
    mapping(address => Review[]) reviews;    
    mapping(address => Restaurant) rests;
    
    mapping(uint256 => address) addressCount;
    uint256 count = 0;
    
    function registerRestaurant(
        string memory _image,
        string memory _name,
        string memory _location
        // Categories _category
    ) public {
        Restaurant storage tmp = rests[msg.sender];
        addressCount[count++] = msg.sender;
        
        tmp.image = _image;
        tmp.name = _name;
        tmp.location = _location;
        // tmp.category = _category;
        tmp.numJumbo = 0;
        tmp.score = 0;
    }
        
    function getRestaurant(address store)
    public
    view
    returns(
        string memory image,
        string memory name,
        string memory location,
        // Categories category,
        uint8 numJumbo,
        int256 score
    ) {
        Restaurant storage tmp = rests[store];
        
        return (
            tmp.image,
            tmp.name,
            tmp.location,
            // tmp.category,
            tmp.numJumbo,
            tmp.score
        );
    }
    
    // function getRestaurants(Categories category) external returns(address[] memory){
    function getRestaurants(uint _numJumbo)
    public
    view
    returns(
        address[] memory lists
    ){
        address[] memory res = new address[](count);
        
        for(uint256 i=0; i<count; i++){
            if(rests[addressCount[i]].numJumbo == _numJumbo){
                res[i] = addressCount[i];
            }
        }
        
        return res;
    }
        
    function voteRestaurant(address store, bool upvote) public {
        if(upvote){
            rests[store].score += 5;
        }
        else{
            rests[store].score -= 5;
        }
    }
    
    function voteRestaurantWithReview(
        address store,
        int256 score,
        string memory _image,
        string memory _body
    ) public {
        rests[store].score += score;
        reviews[store].push(Review(msg.sender, _image, _body, score));
        
    }
    
    function voteReview(address store, uint256 numReview, bool upvote) public {
        if(upvote){
            reviews[store][numReview].score += 5;
        }
        else{
            reviews[store][numReview].score -= 5;
        }
    }
    
    function getReviewNum(address store)
    public
    returns(uint256 num) {
        return reviews[store].length;
    }
    
    function getReview(address store, uint256 numReview) public returns(
        address writer,
        string memory image,
        string memory body,
        int256 score
    ){
        return (
            reviews[store][numReview].writer,
            reviews[store][numReview].image,
            reviews[store][numReview].body,
            reviews[store][numReview].score
        );
    }
}
