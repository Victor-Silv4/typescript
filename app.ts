import { PeopleAccount } from "./class/PeopleAccount";
import { ComapanyAccount } from "./class/CompanyAccount"
import { ContaAlternativa } from "./class/ContaAlternativa";


const peopleAccount: PeopleAccount = new PeopleAccount("Victor", 1, 1002)

const companyAccount: ComapanyAccount = new ComapanyAccount("Dio", 2)

const contaAlternativa: ContaAlternativa = new ContaAlternativa("João", 3)

peopleAccount.deposit(1000)
peopleAccount.withdraw(200)
console.log(`Saldo disponível: ${peopleAccount.getBalance()}R$`)

companyAccount.getLoan(1000);
companyAccount.deposit(300)
companyAccount.withdraw(200)
console.log(`Saldo disponível: ${companyAccount.getBalance()}R$`)

contaAlternativa.deposit(400)
contaAlternativa.withdraw(200)
console.log(`Saldo disponível: ${contaAlternativa.getBalance()}R$`)

