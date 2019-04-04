var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
var temp=" "
function generatepass(passlen){
    temp=" "
    for(var i=0;i<passlen;i++){
//        chrAt to select a charecter
        temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return temp;
}

function populateform(enterlength){
    document.passGen.output.value=generatepass(enterlength)
}