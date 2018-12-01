interface JumboGuide {
    enum Categories {Star3, Star2, Star1, Korean, Chinese, Japanese, Russian}
    
    struct Restaurant {
        bytes32 image;
        string name;
        string location;
        Categories category;
        string menu;
        int256 score;
    }
    
    struct Review {
        address writer;
        bytes32 image;
        string body;
        int256 score;
    }
    
    function registerRestaurant(
        bytes32 image,
        string calldata name,
        string calldata location,
        Categories category,
        string calldata menu
        ) external;
    function voteRestaurant(address store, bool upvote) external;
    function getRestaurants(Categories category) external returns(address[] memory);
    function getRestaurant(address store) external returns(
        bytes32 image,
        string memory name,
        string memory location,
        Categories category,
        string memory menu,
        int256 score
        );
    
    function voteRestaurantWithReview(address store, bytes32 hash, int256 score) external;
    function voteReview(uint256 reviewId, bool upvote) external;
    function getReviews(address store) external returns(uint256[] memory);
    function getReview(uint256 reviewId) external returns(
        address writer,
        bytes32 image,
        string memory body,
        int256 score
        );
}
