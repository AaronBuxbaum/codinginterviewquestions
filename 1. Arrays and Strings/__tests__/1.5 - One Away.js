import { oneAway } from '../1.5 - One Away';

test('One Away', () => {
    expect(oneAway('pale', 'pale')).toBe(true);
    expect(oneAway('pale', 'ple')).toBe(true);
    expect(oneAway('pales', 'pale')).toBe(true);
    expect(oneAway('pale', 'bale')).toBe(true);
    expect(oneAway('pale', 'bae')).toBe(false);
});