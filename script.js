// function addtext(event){
// let textid=document.getElementById("transaction1");
// let textBox=textid.firstElementChild.value;
// console.log(textBox);
let balance=document.getElementById("balance1");
let textid=document.getElementById("transaction1");
    let expense=document.getElementById("expense1");
    let income=document.getElementById("income1");
let bal=Number.parseInt("0");
let expenseNo=Number.parseInt("0");
let incomeNo=Number.parseInt("0");
function adddata(event){
    let parentlist=document.getElementById("hlist");
    // let textid=document.getElementById("transaction1");
    // let expense=document.getElementById("expense1");
    // let income=document.getElementById("income1");
    // let balance=document.getElementById("balance1");
    // let bal=Number.parseInt("0");
    console.log(bal);
    // let expenseBox=expense.textContent;
    let textBox=textid.firstElementChild.value;
    console.log(textBox);
    let amountid=document.getElementById("amount3");
    let amountBox=amountid.firstElementChild.value;
    let actualamountBox=Number.parseInt(amountBox);
    let posactualamountBox=Number.parseInt(actualamountBox)*-1;
    console.log(actualamountBox);
    if(actualamountBox<0){
        // let bal=Number.parseInt("0");
        let newli=document.createElement('li');
        newli.className="spent";
        newli.innerHTML=`<div class="spenthead">${textBox}</div>
        <div class="spentvalue">${amountBox}</div>`;
        parentlist.appendChild(newli);
        expenseNo=expenseNo+posactualamountBox;
        expense.textContent="Rs "+expenseNo;
        bal=bal+actualamountBox;

    }
    else{
        let posnewli=document.createElement('li');
        posnewli.className="receive";
        posnewli.innerHTML=`<div class="receivehead">${textBox}</div>
        <div class="receivevalue">${amountBox}</div>`;
        parentlist.appendChild(posnewli);
        incomeNo=incomeNo+actualamountBox;
        income.textContent="Rs "+incomeNo;
        bal=bal+actualamountBox;
    }
    let actualbalance="Rs "+bal;
    balance.textContent=actualbalance;
}