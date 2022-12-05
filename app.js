const bdayDate = document.querySelector(".bday-date");
const luckyNumb = document.querySelector(".lucky-numb");
const checkBtn = document.querySelector(".check-btn");
const outPut = document.querySelector(".output");
const wrongBtn = document.querySelector(".wrong-btn");
const privacyNote = document.querySelector(".privacy-note");

function  checkBDayLuck(sum,lucky)
{
    if(sum&&lucky)
    {
    if(sum%lucky==0)
    {
    outPut.innerText="Yayy!! Your Birthday is LUCKY🥳";

    }
    else
    {
        outPut.innerText="Your Birthday is UNLUCKY!!😞"; 
    }
}
else
outPut.innerText="Please fill the require Data 🥺";
}

function clickEvent()
{
    var lucky = luckyNumb.value;
    var  DOB = bdayDate.value ;
   var sum=0;
   console.log(DOB.length);
   for(var i=0;i<DOB.length;i++)
   {
       if(DOB[i]!="-")
       sum+=Number(DOB[i]);
       
   }
   console.log(sum);
  checkBDayLuck(sum,lucky);
}



checkBtn.addEventListener('click',clickEvent);
wrongBtn.addEventListener('click',() => {
    privacyNote.style.visibility ="hidden";
}
);



