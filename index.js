// write js code here corresponding to index.html
// You should add submit event on the form

var form=document.querySelector("#masaiForm");
form.addEventListener("submit",function(event){

    masai=JSON.parse(localStorage.getItem("schedule"))|| [];

    event.preventDefault();

    var data={
        matchNumber:form.matchNum.value,
        selectTeamA:form.teamA.value,
        selectTeamB:form.teamB.value,
        matchDate:form.date.value,
        matchVenue:form.venue.value,
    }

    masai.push(data)
    localStorage.setItem("schedule",JSON.stringify(masai));


})
