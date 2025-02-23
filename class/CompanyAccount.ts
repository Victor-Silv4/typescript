import { Account } from "./Account";

export class ComapanyAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (loanValue: number): void => {
        if(this.getStatus()) {
            this.setBalance(this.getBalance() + loanValue)
            console.log("A empresa pegou um emprestimo")
        }
        else {
            console.log("ERRO: Conta inválida")
        }
    }
}