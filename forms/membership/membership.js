
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btn1.onclick=function(){
  let memberInput=inptFirstName.value
  if{for (i=0;i<members.length;i++){
    if (memberInput=members[i]){
     lblOutput.textContent=`You are a member`
   }
   }
   } else {
     members.push(memberInput)
     lblOutput.textContent=`You have been added as a member`
     }
}
