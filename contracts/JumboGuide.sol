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
    
    // hash(Restaurant) => Review[]
    mapping(bytes32 => Review[]) reviews;    
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
        
    /*
    function voteRestaurant(address store, bool upvote) external;
    
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
