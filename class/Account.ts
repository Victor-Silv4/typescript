export abstract class Account {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (newBalance: number): void => {
        this.balance = newBalance
    }

    getStatus = (): boolean => {
        return this.status
    }

    withdraw = (withdrawValue: number): void => {
        if(this.validateStatus() && this.balance >= withdrawValue) {
            console.log(`Você sacou ${withdrawValue}R$`)
            this.balance -= withdrawValue
        }
        
        else {
            console.log("Conta inválida")
        }
    }

    deposit = (depositValue: number): void => {

        if(this.validateStatus()) {
            console.log(`Você depositou ${depositValue}R$`)
            this.balance += depositValue
        }

        else {
            console.log("Conta inválida")
        }
    }

    private validateStatus = (): boolean => {
        if (this.status) {
          return this.status
        }
    
        throw new Error('Conta inválida')
    }
}