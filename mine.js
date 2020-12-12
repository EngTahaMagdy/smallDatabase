var uName=document.getElementById('name'),
uEmail=document.getElementById('email'),
uPhone=document.getElementById('phone'),
uAddress=document.getElementById('uaddress')
saveBtn=document.getElementById('saveBtn'),
inps = document.getElementsByTagName("input"),
SecAll=document.getElementById('all') ,
btnAll=document.getElementById('btnAll');


var total=""
var newRecord=[];
var regex={
    
    phone:/^(010|012|015)[0-9]{8}$/,
    email:/^([\w\.]+)@([\w\.]{1,15})$/
};

//localStorage.setItem("allStorage",JSON.stringify(newRecord))

console.log(btnAll.textContent=="Up")
btnAll.onclick=function(){
    if(btnAll.textContent=="Up")
    {
        SecAll.style.display="none";
        btnAll.textContent="Down"
    }else
    {
        SecAll.style.display="block";
        btnAll.textContent="Up"

    }
}


for(var i=0; i< inps.length;i++)
{
    inps[i].addEventListener("keyup",function(e)
    { validate(e.target,regex[e.target.attributes.id.value])
       
    });
}
function validate(inps, reg)
{
    if(reg.test(inps.value)== true)
    {
        inps.className=" form-control is-valid";
    }
    else
    {
        inps.className=" form-control is-invalid";
       
    }
}
saveBtn.onclick=function()
{
    if (uName.value === "" || uEmail.value === "" || uAddress.value === "" || uPhone.value === "" || inps.className===" form-control is-invalid") {
		document.getElementById("n").innerHTML = "Please Fill Input";
		return 0;
	} else {
		document.getElementById("n").innerHTML = "";
	}
    var record=
    {
        name:uName.value,
        email:uEmail.value,
        phone:uPhone.value,
        address:uAddress.value
    }
    newRecord.push(record);
    localStorage.setItem("allStorage",JSON.stringify(newRecord))



    var xx=JSON.parse( localStorage.getItem("allStorage"));  
for(var i=0; i< xx.length;i++)
{
    total+="<tr> <td>"+xx[i].name +"</td><td>"+xx[i].email+"</td><td>"+xx[i].phone+"</td><td>"+xx[i].address+"</td></tr>"
}



       



document.getElementById('tData').innerHTML= total;


for (var i = 0; i < inps.length; i++) {
    inps[i].value = "";

}
}
