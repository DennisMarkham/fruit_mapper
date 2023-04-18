let fruits = new Map([
  ["apples", "good"],
  ["oranges", "good"],
  ["mangos", "yuck"],
  ["bannanas", "good"],
  ["plum", "yuck"]
])

let sortedFruits = new Map([...fruits.entries()].sort());

for(x of sortedFruits)
  {
    $("#fruits").append(`<button onClick =
    "alert('${x[1]}')">${x[0]}</button>`)
  }


function addFruit()
{
	fruits.set(document.getElementById("newFruit").value, document.getElementById("newOp").value);

	sortedFruits = new Map([...fruits.entries()].sort());

$("#fruits").empty();

for(x of sortedFruits)
  {

    $("#fruits").append(`<button onClick =
    "alert('${x[1]}')">${x[0]}</button>`)
  }
}