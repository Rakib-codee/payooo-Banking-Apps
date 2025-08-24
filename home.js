const vaildPin = 1234

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
   
    const bankName = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pinAdd = parseInt(document.getElementById("pin").value)
    
    if(accountNumber.length <11){
        alert("Account number must be 11 digits long")
        return;
       }
       if( pinAdd !== vaildPin){
        alert("Invalid pin")
        return;
       }
    const availablebalance = parseInt(document.getElementById("available-bln").innerText)
    const totalBalance = availablebalance + amount
    document.getElementById("available-bln").innerText = totalBalance

   
})