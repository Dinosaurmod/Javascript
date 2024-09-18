import RubyToBlocksConverter from '../../../../src/lib/ruby-to-blocks-converter';
import {
    convertAndExpectRubyBlockError
} from '../../../helpers/expect-to-equal-blocks';

describe('RubyToBlocksConverter/Control', () => {
    let converter;
    let target;
    let code;

    beforeEach(() => {
        converter = new RubyToBlocksConverter(null);
        target = null;
        code = null;
    });

    describe('control_wait', () => {
        test('invalid', () => {
            [
                '/*sleep*/ await new Promise(resolve => setTimeout(resolve, * 1000))',
                '/*sleep*/',
                '/*sleep*/ await new Promise(resolve => setTimeout(resolve, 1, 2 * 1000))',
                '/*sleep*/ await new Promise(resolve => setTimeout(resolve, abc * 1000))',
                '/*sleep*/ await new Promise(resolve => setTimeout(resolve, "abc" * 1000))'
            ].forEach(c => {
                convertAndExpectRubyBlockError(converter, target, c);
            });
        });
    });
});