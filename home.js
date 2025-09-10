// dumppy pin
const vaildPin = 1234;


function getInputValueNumber(id){
    parseInt(document.getElementById(id).value);
}

// toggle display of sections
document.getElementById("add-btn").addEventListener("click",function(){
    document.getElementById('cash-out-parent').style.display = "none";
    document.getElementById('transfer-money-parent').style.display = "none";
    document.getElementById('get-bonus-parent').style.display = "none";
    document.getElementById('pay-bill-parent').style.display = "none";
    document.getElementById('add-money-parent').style.display = "block";
   })
   document.getElementById("out-btn").addEventListener("click",function(){
       document.getElementById('transfer-money-parent').style.display = "none";
       document.getElementById('add-money-parent').style.display = "none";
       document.getElementById('get-bonus-parent').style.display = "none";
       document.getElementById('pay-bill-parent').style.display = "none";
       document.getElementById('cash-out-parent').style.display = "block";
      })
      document.getElementById("transfer-btn").addEventListener("click",function(){
       document.getElementById('transfer-money-parent').style.display = "block";
       document.getElementById('get-bonus-parent').style.display = "none";
       document.getElementById('add-money-parent').style.display = "none";
       document.getElementById('pay-bill-parent').style.display = "none";
       document.getElementById('cash-out-parent').style.display = "none";
      })
      document.getElementById("bonus-btn").addEventListener("click",function(){
       document.getElementById('transfer-money-parent').style.display = "none";
       document.getElementById('get-bonus-parent').style.display = "block";
       document.getElementById('add-money-parent').style.display = "none";
       document.getElementById('pay-bill-parent').style.display = "none";
       document.getElementById('cash-out-parent').style.display = "none";
      })

      document.getElementById("pay-btn").addEventListener("click",function(){
        document.getElementById('transfer-money-parent').style.display = "none";
        document.getElementById('get-bonus-parent').style.display = "none";
        document.getElementById('add-money-parent').style.display = "none";
        document.getElementById('pay-bill-parent').style.display = "block";
        document.getElementById('cash-out-parent').style.display = "none";
       })

// addmoney functionality

document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();

    const bankName = getInputValueNumber("bank");
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



// Cash Out Functionality

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

// transfer Options Functionality

document.getElementById("transfer-button").addEventListener('click',function(e){
    e.preventDefault();

    const userNumber = document.getElementById('trns-num').value
    const transferAmount = parseInt(document.getElementById('transfer-amount').value)
    const pinTransfer = parseInt(document.getElementById("pin-trns").value)
    console.log(userNumber, transferAmount, pinTransfer);
    
    if(userNumber.length < 11){
        alert("User number must be 11 digits long");
        return;
    }   
    if(pinTransfer !== vaildPin){
        alert("Invalid pin");
        return;
    }
    const availablebalance = parseInt(document.getElementById("available-bln").innerText);
    const totalBalance = availablebalance - transferAmount;
    document.getElementById("available-bln").innerText = totalBalance;
})

// Bonus Functionality

document.getElementById("bonus-button").addEventListener('click',function(e){
    e.preventDefault();
    console.log("Bonus button clicked");

    const bonusCoupon = parseInt(document.getElementById("bonus-cup").value)

    if(isNaN(bonusCoupon) || bonusCoupon <= 0){
        alert("Please enter a valid bonus coupon amount");
        return;
    }
    
    const availablebalance = parseInt(document.getElementById("available-bln").innerText);
    const totalBalance = availablebalance + bonusCoupon;
    document.getElementById("available-bln").innerText = totalBalance;

})

document.getElementById("pay-bill-button").addEventListener("click", function(e){
    e.preventDefault();

    const payItems = document.getElementById("pay").value;
    const payAccountNumber = document.getElementById("pay-account-number").value;
    const payAmount = parseInt(document.getElementById("pay-amount").value);
    const payPin = parseInt(document.getElementById("pay-pin").value);
    
    // Bank select validation
    if(payItems === "") {
        alert("Please select a payItems!");
        return;
    }

    // Account number validation
    if(payAccountNumber.length < 11){
        alert("Account number must be 11 digits long");
        return;
    }

    // Pin validation
    if(payPin !== vaildPin){
        alert("Invalid pin");
        return;
    }

    // Balance update
    const availablebalance = parseInt(document.getElementById("available-bln").innerText);
    const totalBalance = availablebalance - payAmount;
    document.getElementById("available-bln").innerText = totalBalance;
})