// write js code here corresponding to matches.html

    var masai=JSON.parse(localStorage.getItem("schedule"));

    dislplayData(masai);

    var filter=document.querySelector("#filterVenue")
    filter.addEventListener("change",filtervenuee)

    function filtervenuee(){
        var selected=document.querySelector("#filterVenue").value
        var data=masai.filter(function(ele){
            return selected==ele.matchVenue
        })
        dislplayData(data)
    }


     var matches=JSON.parse(localStorage.getItem("favourites"))||[];

    function dislplayData(masai){

        document.querySelector("tbody").innerHTML="";

        masai.forEach(function(ele){

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

             var fav=document.createElement("td")
             fav.innerText="Add as Favourites";
             fav.style.color="green";
             fav.style.cursor="pointer"
             fav.addEventListener("click",function(){
                 favfunction(ele);
             });

             tr.append(match,team1,team2,date,venue,fav)

             document.querySelector("tbody").append(tr);
        })
    }

    function favfunction(ele){
        matches.push(ele);

        localStorage.setItem("favourites",JSON.stringify(matches));
    }


