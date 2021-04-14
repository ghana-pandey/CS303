"use strict";
/* global Account  */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }
    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(amount){
        this._overdraft= amount;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            if(amount > this._overdraft || this._balance - amount < -this._overdraft)
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        } 
        this._balance -= amount;
    }

    toString(){
       return "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this._overdraft;

    }
    endOfMonth() {
        if(this._balance < 0){
        return ("Warning, low balance " + this.toString()); 
        } else {
            return "";
        }
    }



}

// const checking = new CheckingAccount(1, 200);
//             console.log(checking.getNumber())//, 1);
//             console.log(checking.getOverdraft())//, 200);
//             console.log(checking.constructor) //CheckingAccount);
//             checking.withdraw(200)
//             console.log(checking.endOfMonth())

            














/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.CheckingAccount = CheckingAccount;