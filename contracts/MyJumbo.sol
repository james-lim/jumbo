interface MyJumbo {
    enum States {Normal, Hunger, Hangry}
    enum Colors {Red, Green, Blue, Black, White, Rainbow}
    
    struct Jumbo {
        uint8 level;
        States state;
        bytes32[] items;
        Colors[] berries;
        Colors jumboColor;
        Colors lastBerry;
    }
    
    // mapping(address => bytes32[]) public myItems;
    
    function feed(Colors berry, uint8 amount) external;
    function equipItem(bytes32 itemId) external;
    function removeItem(bytes32 itemId) external;
    // function getItems() external returns(bytes32[] lists);
    function getItems() external returns(bytes32[] memory lists);
    function getJumbo() external returns(
        uint8 level,
        States state,
        bytes32[] memory items,
        Colors[] memory berries,
        Colors jumboColor,
        Colors lastBerry
    );
}
