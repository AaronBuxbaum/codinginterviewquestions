import { stringCompression } from '../1.6 - String Compression';

test('String Compression', () => {
    expect(stringCompression('aabcccccaaa')).toEqual('a2b1c5a3');
});