pragma solidity ^0.4.23;

library DaoStructs {
    struct Voting {
        uint256 start_time;
        mapping (address => bytes32) commits;
        mapping (address => bool) yesVotes;
        mapping (address => bool) noVotes;
        uint256 totalYesVotes;
        uint256 totalNoVotes;
        bool prlValid;
    }

    struct ProposalVersion {
        bytes32 doc_ipfs_hash;
        uint256 created;
        Voting draftVoting;
        uint256 milestoneCount;
        uint256[] milestoneDurations;
        uint256[] milestoneFundings;
    }

    struct Proposal {
        /* DoublyLinkedList.Bytes proposalVersionDocs; */
        mapping (bytes32 => ProposalVersion) proposalVersions;
        address proposer;
        address endorser;
        Voting votingRound;
        Voting[] interimRounds;
        uint8 currentState;
        uint256 timeCreated;

        // this will always be the doc_ipfs_hash of the last proposal version
        bytes32 proposalId;
    }
}
