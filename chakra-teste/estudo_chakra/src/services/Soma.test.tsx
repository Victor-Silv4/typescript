import { Soma } from './Soma';

describe('Soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = Soma(1);
        expect(value).toBe(2);
    });
})

