interface JumboArtPool {
    // JumboArtPool
    
    // mapping(uint8 => bytes32[]) public candidates;
    
    function registerCandidate(uint8 level, bytes32 hash) external;
    function vote(uint8 level, bytes32 hash, bool upvote) external;
    function getCandidate(bytes32 hash) external returns(int256 votes);
    // function getCandidates(uint8 level) external returns(bytes32[] memory ranking);
    function getCandidates(uint8 level) external returns(bytes32[] memory ranking);
    function getJumbo(uint8 level) external returns(bytes32 target);
}
