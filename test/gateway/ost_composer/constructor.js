// Copyright 2019 OpenST Ltd.
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

const OSTComposer = artifacts.require('OSTComposer');

contract('OSTComposer.constructor() ', (accounts) => {
  let organization;
  let ostComposer;

  beforeEach(async () => {
    organization = accounts[4];
  });

  it('should able to deploy contract successfully', async () => {
    ostComposer = await OSTComposer.new(organization);

    assert(
      web3.utils.isAddress(ostComposer.address),
      'Returned value is not a valid address.',
    );
  });

  it('should deploy with correct organization address', async () => {
    ostComposer = await OSTComposer.new(organization);

    assert.strictEqual(
      await ostComposer.organization(),
      organization,
      'Incorrect organization is set',
    );
  });
});
