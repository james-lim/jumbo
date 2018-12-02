contract JumboArtPool {
    // public?
    mapping(uint8 => bytes32[]) public candidates;
    mapping(bytes32 => int256) public items;

    function registerCandidate(uint8 level, bytes32 hash) public {
        items[hash] = 0;
        candidates[level].push(hash);
    }
    
    function vote(uint8 level, bytes32 hash, bool upvote) public {
        if(upvote){
            items[hash]++;
        }
        else{
            items[hash]--;
        }
    }
    
    function getCandidate(bytes32 hash) external returns(int256 votes) {
        return items[hash];
    }
    
    function getCandidates(uint8 level) external returns(bytes32[] memory ranking) {
        return candidates[level];
    }
    
    function getJumbo(uint8 level) external returns(bytes32 target) {
        bytes32 res = 0x00;
        int256 tar = 0;
        
        for (uint256 i=0; i < candidates[level].length; i++) {
            if(items[candidates[level][i]] > 10 && items[candidates[level][i]] > tar){
                res = candidates[level][i];
                tar = items[candidates[level][i]];
            }
        }
        
        return res;
    }
}
