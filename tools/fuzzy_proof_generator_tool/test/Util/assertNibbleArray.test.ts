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

import 'mocha';
import { assert } from 'chai';
import Util from '../../Util';

describe('Util::assertNibbleArray', (): void => {
  it('Reverts on a negative input.', (): void => {
    assert.throws(
      (): void => Util.assertNibbleArray(Buffer.from([-1])),
    );
  });

  it('Reverts on an input bigger than 0xF.', (): void => {
    assert.throws(
      (): void => Util.assertNibbleArray(Buffer.from([0xF + 1])),
    );
  });

  it('Checks an empty array.', (): void => {
    assert.doesNotThrow(
      (): void => Util.assertNibbleArray(Buffer.alloc(0)),
    );
  });

  it('Checks a valid array.', (): void => {
    assert.doesNotThrow(
      (): void => Util.assertNibbleArray(Buffer.from([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      ])),
    );
  });
});
