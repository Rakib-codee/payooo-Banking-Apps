document.getElementById('loginButton').addEventListener("click",function(e){
    e.preventDefault();
    const mobileNumber = 11223344
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
       alert("Login Successful")    
    } else {
        // console.log("Login Failed")
        alert("Invalid mobile number or PIN")
    }
})