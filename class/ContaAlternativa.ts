import { Account } from "./Account";

export class ContaAlternativa extends Account{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (depositValue: number): void => {

        if(this.getStatus()) {
            console.log(`Você depositou ${depositValue}R$`)
            this.setBalance(depositValue + 10)
        }

        else {
            console.log("Conta inválida")
        }
    }
}