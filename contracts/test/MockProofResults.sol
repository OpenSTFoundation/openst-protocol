pragma solidity ^0.4.23;

// Copyright 2018 OpenST Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ----------------------------------------------------------------------------
//
// http://www.simpletoken.org/
//
// ----------------------------------------------------------------------------

/**
 * @title MockProofResults
 *
 * @dev This contract can be used for mocking the results of merkle
 *      patricia proof. As MockMerklePatriciaProof and MerklePatriciaProof are
 *      the libraries, setting the mocking values is a challenge. So this
 *      can be used to mock the result of verify function
 */
contract MockProofResults {

    /** A mapping of hashes to their results. */
    mapping (bytes32 => bool) results;

    function setResult (
        bytes32 _value,
        bytes _encodedPath,
        bytes _rlpParentNodes,
        bytes32 _root,
        bool _result
    )
        external
        returns (bool isSuccess_)
    {

        bytes32 resultHash = hash(
            _value,
            _encodedPath,
            _rlpParentNodes,
            _root
        );

        results[resultHash] = _result;

        isSuccess_ = true;

    }

    function verify(
        bytes32 _value,
        bytes _encodedPath,
        bytes _rlpParentNodes,
        bytes32 _root
    )
        external
        view
        returns (bool)
    {

        bytes32 resultHash = hash(
            _value,
            _encodedPath,
            _rlpParentNodes,
            _root
        );

        return results[resultHash];
    }

    function hash(
        bytes32 _value,
        bytes _encodedPath,
        bytes _rlpParentNodes,
        bytes32 _root
    )
        private
        pure
        returns (bytes32 resultHash_)
    {
        resultHash_ =  keccak256(
            abi.encodePacked(
                _value,
                _encodedPath,
                _rlpParentNodes,
                _root
            )
        );
    }

}