const vaildPin = 1234;

document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();

    const bankName = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pinAdd = parseInt(document.getElementById("pin").value);
    
    // Bank select validation
    if(bankName === "") {
        alert("Please select a bank!");
        return;
    }

    // Account number validation
    if(accountNumber.length < 11){
        alert("Account number must be 11 digits long");
        return;
    }

    // Pin validation
    if(pinAdd !== vaildPin){
        alert("Invalid pin");
        return;
    }

    // Balance update
    const availablebalance = parseInt(document.getElementById("available-bln").innerText);
    const totalBalance = availablebalance + amount;
    document.getElementById("available-bln").innerText = totalBalance;
})

// Logout button
document.getElementById("log-out").addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "loginForm.html";
})

document.getElementById("add-btn").addEventListener("click",function(){
 document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
})
document.getElementById("out-btn").addEventListener("click",function(){
    document.getElementById('add-money-parent').style.display = "none";
       document.getElementById('cash-out-parent').style.display = "block";
   })

document.getElementById("cash-out-btn").addEventListener("click",function(e){
    e.preventDefault();
  
    const agentNumber = document.getElementById("agent-num").value
    const cashOutAmount = parseInt(document.getElementById("cash-out-amount").value)
    const pinOut = parseInt(document.getElementById("pin-out").value)

    if(agentNumber.length <11){
        alert("Agent number must be 11 digits long");
        return;
    }
   
    if(pinOut !== vaildPin){
        alert("Invalid pin");
        return;
    }

    const availablebalance = parseInt(document.getElementById("available-bln").innerText);
    const totalBalance = availablebalance - cashOutAmount;
    document.getElementById("available-bln").innerText = totalBalance;
    
})