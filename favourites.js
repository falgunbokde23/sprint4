// write js code here corresponding to favourites.html

var masai=JSON.parse(localStorage.getItem("favourites"));

dislplayData(masai);

//  var matches=JSON.parse(localStorage.getItem("favourites"))||[];

function dislplayData(data){

    document.querySelector("tbody").innerHTML="";

    data.forEach(function(ele,index){

        var tr =document.createElement("tr")

        var match=document.createElement("td")
         match.innerText=ele.matchNumber;

         var team1=document.createElement("td")
         team1.innerText=ele.selectTeamA;

         var team2=document.createElement("td")
         team2.innerText=ele.selectTeamB;

         var date=document.createElement("td")
         date.innerText=ele.matchDate;

         var venue=document.createElement("td")
         venue.innerText=ele.matchVenue;

         var deletet=document.createElement("td")
         deletet.innerText="Delete";
         deletet.style.color="red";
         deletet.style.cursor="pointer"
         deletet.addEventListener("click",function(){
             delfunction(ele,index);
         });

         tr.append(match,team1,team2,date,venue,deletet)

         document.querySelector("tbody").append(tr);
    })
}

function delfunction(ele,index){
    
    masai.splice(index,1)

    localStorage.setItem("favourites",JSON.stringify(masai));
    window.location.reload()
}
