function getfile(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState === 4 && xhr.status == "200")
    {
      callback(xhr.responseText);
    }

  };
  xhr.send();
}

getfile("data.json",function(text)
  {
    var data = JSON.parse(text);
    console.log(data);
    career(data.career);
    education(data.education);
    skills(data.skills);
  })

  var child2=document.querySelector(".childTwo");

function career(careerInfo){
  var careerHeading=document.createElement("h3");
  child2.appendChild(careerHeading);
  careerHeading.textContent="CAREER OBJECTIVE";
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);

var ch=document.createElement("p");
ch.textContent=careerInfo.info;
child2.appendChild(ch);
}

function education(edu){
  var eduHeading=document.createElement("h3");
  eduHeading.textContent="EDUCATIONAL QUALIFICATIONS";
    child2.appendChild(eduHeading);
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);
var eduTable=document.createElement("table");
eduTable.border="1";
var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";
//eduTable.innerHTML=tr1;
var tr2="";
for(var i=0; i<edu.length;i++)
{
  tr2+="<tr><td>"+edu[i].Degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";
}
eduTable.innerHTML=tr1+tr2;
child2.appendChild(eduTable);
}

function skills(skl)
{
  var ul=document.createElement("ul");

    child2.appendChild(ul);
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);

for(var i=0; i<skl.length;i++)
{
  var li=document.createElement("li");
  li.textContent=skl[i].title+":"+skl[i].content;
  ul.appendChild(li);
}
}
