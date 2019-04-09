import expect from 'expect';
import {selectLocation} from 'Store/selectors';
import testStore from './data/testStore';

test('test selectLocation', () => {
    const {location} = selectLocation(testStore);
    expect(location).toBe('29401');
});
