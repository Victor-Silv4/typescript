import { Account } from "./Account"

export class PeopleAccount extends Account {
    private docID: number

    constructor(name: string, accountNumber: number, docID: number) {
        super(name, accountNumber)
        this.docID = docID
    }
}