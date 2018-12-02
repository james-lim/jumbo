contract SymbolArtPool {
    mapping(address => bytes32) symbols;
    mapping(bytes32 => uint256) priceTag;
    mapping(bytes32 => address payable) owners;
    
    bytes32[] pool;
    
    function registerSymbol(bytes32 hash, uint256 price) public {
        priceTag[hash] = price;
        owners[hash] = msg.sender;
        pool.push(hash);
    }
    
    function buy(bytes32 hash)
    public
    payable {
        if(msg.value >= priceTag[hash]){
            owners[hash].transfer(msg.value);
            symbols[msg.sender] = hash;
        }
    }
    
    function getSymbolForStore(address store) public view returns(bytes32 hash) {
        return symbols[store];
    }
    
    function getSymbol(bytes32 hash) public returns(uint256 price, address owner) {
        return (priceTag[hash], owners[hash]);
    }
    
    function getSymbols() public returns(bytes32[] memory lists) {
        return pool;
    }
}
