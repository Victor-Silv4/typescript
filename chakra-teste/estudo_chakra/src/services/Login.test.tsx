import { Login } from './Login'

describe('Login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    it("Deve exibir uma mensagem de boas vindas", () => {[
        Login(),
        expect(mockAlert).toBeCalled()
    ]})
})