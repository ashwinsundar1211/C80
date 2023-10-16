NameArray = []

function Submit()
{
  var Display_Array = []

  for (var j = 1; j <= 4; j++)
  {
    var StudentArray = document.getElementById("Name"+j).value
    console.log(NameArray)
    NameArray.push(StudentArray) 
  }

  console.log(NameArray)

  var Length1 = NameArray.length

  console.log(Length1)

  for (var k = 0; k<Length1; k++)
  {
    Display_Array.push("<h4>Name-"+NameArray[k]+"</h4>")
    console.log(Display_Array)
  }

  console.log(Display_Array)

  document.getElementById("Display_Name").innerHTML = Display_Array

  var Remove_Comma = Display_Array.join(" ")

  console.log(Remove_Comma)

  document.getElementById("Display_Without_Comma").innerHTML = Remove_Comma

  document.getElementById("Submitbtm").style.display = "none";
  document.getElementById("Sortbtm").style.display = "inline-block";
}

function Sorting()
{
  NameArray.sort()

  console.log(NameArray)

  var Sorted_Array = []

  var Length1 = NameArray.length

  console.log(Length1)

  for (var k = 0; k<Length1; k++)
  {
    Sorted_Array.push("<h4>Name-"+NameArray[k]+"</h4>")
    console.log(Sorted_Array)
  }

  var Remove_Comma = Sorted_Array.join(" ")

  console.log(Remove_Comma)

  document.getElementById("Display_Without_Comma").innerHTML = Remove_Comma
}