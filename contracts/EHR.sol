// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EHR {

    struct Record {
        string ipfsHash;
        bytes32 fileHash;
        uint256 timestamp;
    }

    mapping(address => Record[]) private patientRecords;
    mapping(address => mapping(address => bool)) public consent;

    event RecordAdded(address indexed patient, string ipfsHash);
    event AccessGranted(address indexed patient, address indexed doctor);
    event AccessRevoked(address indexed patient, address indexed doctor);

    function addRecord(string memory _ipfsHash, bytes32 _fileHash) public {
        patientRecords[msg.sender].push(
            Record(_ipfsHash, _fileHash, block.timestamp)
        );
        emit RecordAdded(msg.sender, _ipfsHash);
    }

    function grantAccess(address _doctor) public {
        consent[msg.sender][_doctor] = true;
        emit AccessGranted(msg.sender, _doctor);
    }

    function revokeAccess(address _doctor) public {
        consent[msg.sender][_doctor] = false;
        emit AccessRevoked(msg.sender, _doctor);
    }

    function getRecords(address _patient) public view returns (Record[] memory) {
        require(
            msg.sender == _patient || consent[_patient][msg.sender],
            "Not authorized"
        );
        return patientRecords[_patient];
    }
}
