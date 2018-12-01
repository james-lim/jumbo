contract JumboGuide {
    enum Categories {Korean, Chinese, Japanese, Russian}
    
    struct Review {
        address writer;
        bytes32 image;
        string body;
        int256 score;
    }
    
    struct Restaurant {
        bytes32 image;
        string name;
        string location;
        Categories category;
        uint8 numJumbo;
        int256 score;
    }
    
    // hash(Restaurant) => Review[]
    mapping(bytes32 => Review[]) reviews;    
    
    mapping(address => Restaurant) rests;
    
    Restaurant _tmp;
    
    function registerRestaurant(
        bytes32 _image,
        string memory _name,
        string memory _location,
        Categories _category
    ) public {
        Restaurant storage tmp = _tmp;
        
        tmp.image = _image;
        tmp.name = _name;
        tmp.location = _location;
        tmp.category = _category;
        tmp.numJumbo = 0;
        tmp.score = 0;
        
        rests[msg.sender] = tmp;
    }
        
    function getRestaurant(address store)
    public
    returns(
        bytes32 image,
        string memory name,
        string memory location,
        Categories category,
        uint8 numJumbo,
        int256 score
    ) {
        
        Restaurant memory tmp = rests[store];
        
        return (
            tmp.image,
            tmp.name,
            tmp.location,
            tmp.category,
            tmp.numJumbo,
            tmp.score
        );
    }
        
        
    /*
    function voteRestaurant(address store, bool upvote) external;
    function getRestaurants(Categories category) external returns(address[] memory);

    
    function voteRestaurantWithReview(address store, bytes32 hash, int256 score) external;
    function voteReview(uint256 reviewId, bool upvote) external;
    function getReviews(address store) external returns(uint256[] memory);
    function getReview(uint256 reviewId) external returns(
        address writer,
        bytes32 image,
        string memory body,
        int256 score
        );
    */
}
