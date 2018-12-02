contract MyJumbo {
    // enum States {Normal, Hunger, Hangry}
    enum Colors {Normal, Red, Green, Blue, Black, White, Rainbow}
    uint8 numColors = 7;
    
    struct Jumbo {
        uint8 level;
        bytes32[] items;
        Colors jumboColor;  // lastBerry
        uint256[] berries;
        // States state;
        // Colors lastBerry;
    }
    
    mapping(address => Jumbo) myjumbo;
    // mapping(address => bytes32[]) public myItems;
    
    function createMyJumbo() public {
        Jumbo storage tmp = myjumbo[msg.sender];
        tmp.level = 1;
        tmp.jumboColor = Colors.Normal;
        tmp.berries = new uint256[](numColors);
    }
    
    function feed(Colors berry, uint256 amount) public {
        (myjumbo[msg.sender].berries)[uint(berry)] += amount;
        
        uint256 res = 0;
        Colors tar = Colors(0);
        for (uint8 i=0; i<numColors; i++){
            if((myjumbo[msg.sender].berries)[i] > res) {
                res = (myjumbo[msg.sender].berries)[i];
                tar = Colors(i);
            }
        }
        
        myjumbo[msg.sender].jumboColor = tar;
    }
    
    function getJumbo(address user)
    public
    returns(
        uint8 level,
        bytes32[] memory items,
        Colors jumboColor,
        uint256[] memory berries
    ) {
        return(
            myjumbo[user].level,
            myjumbo[user].items,
            myjumbo[user].jumboColor,
            myjumbo[user].berries
        );
    }
    
    function equipItem(bytes32 itemId) public {
        myjumbo[msg.sender].items.push(itemId);
    }
    
    function removeItem(bytes32 itemId) public {
        uint256 len = myjumbo[msg.sender].items.length;
        for (uint256 i=0; i<len; i++){
            if (myjumbo[msg.sender].items[i] == itemId){
                for(uint256 j=i; j<len-1; j++) {
                   myjumbo[msg.sender].items[j] = myjumbo[msg.sender].items[j+1];
                }
                delete myjumbo[msg.sender].items[len-1];
                len--;
                myjumbo[msg.sender].items.length--;
            }
        }
    }
    
    /*
    function getItems() external returns(string memory hash);
    */
}
