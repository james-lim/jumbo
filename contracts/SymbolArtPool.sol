interface SymbolArtPool {
    // SymbolPool
    
    // mapping(bytes32 => address) public owners;
    // mapping(address => bytes32) public mySymbols;
    
    function registerSymbol(bytes32 hash, uint256 price) external;
    function buy(bytes32 hash) external payable;
    function getSymbol(address store) external returns(bytes32 hash);
    // function getSymbols() external returns(bytes32[] lists);
    function getSymbols() external returns(bytes32[] memory lists);
}
