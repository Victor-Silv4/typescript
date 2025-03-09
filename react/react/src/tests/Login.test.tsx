import { Login } from "../services/Login"

const mockReturn = jest.fn()
window.alert = mockReturn;
describe("Login", () => {
    it("Deve exibir uma mensagem de boas vindas ao usuário Victor na tela", () => {
        const name = "Victor"
        Login(name);
        expect(window.alert).toHaveBeenCalledWith(`Bem Vindo(a), ${name}!`);
    })

    it("Desev retornar uma mensagem de boas vindas à usuária Nath", () => {
        const name = "Nath"
        Login(name);
        expect(window.alert).toHaveBeenCalledWith(`Bem Vindo(a), ${name}!`);
    })
})