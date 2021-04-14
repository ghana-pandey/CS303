"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingaccount.js");
// const SavingsAccount = sav.SavingsAccount; 


class Bank {
    constructor(){
        this._accounts = [];
        this.nextNumber =1;
    }
    addAccount(){
        this._accounts.push(new Account(this.nextNumber))
        this.nextNumber++;

    }
    addSavingsAccount(interest){
        this._accounts.push(new SavingsAccount(this.nextNumber, interest))
        this.nextNumber++;


    }
    addCheckingAccount(overdraft){
        this._accounts.push(new CheckingAccount(this.nextNumber, overdraft))
        this.nextNumber++

    }
    closeAccount(number){
     const index =   this._accounts.findIndex(item => item._number === number);
     this._accounts.splice(index,1);
    
    }
    accountReport(){
        let report ="";
        for(let element of this._accounts){
        report +=element.toString()+"\n"
        }
        return report;
    }
   
}

let bank = new Bank();
        
    //     console.log(bank._accounts.length);
    
    
       bank.addAccount();
       
    // console.log( bank._accounts[0].getNumber());
    //  console.log(bank._accounts[0].getBalance());
    
     bank.addSavingsAccount(2.5);
    // console.log(bank._accounts[1].getNumber());
    // console.log(bank._accounts[1].getBalance());
    // console.log(bank._accounts[1].getInterest());

    bank.addCheckingAccount(500);
    // console.log(bank._accounts[2].getNumber());//3
    // console.log(bank._accounts[2].getBalance());//0
    // console.log(bank._accounts[2].getOverdraft());//500
 
    bank.closeAccount(1);
    // console.log(bank)
    // console.log(bank._accounts.length);//, 2);
    // console.log(bank._accounts[1].getNumber());//, 3);
    // console.log(bank._accounts[1].getBalance());// 0);
    // console.log(bank._accounts[1].getOverdraft())//, 500);
    // console.log(bank.nextNumber)
     console.log(bank.accountReport());
    bank._accounts[0].deposit(100);
    bank._accounts[1].withdraw(100);
    bank.addAccount();
    console.log(bank.endOfMonth())





















/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;