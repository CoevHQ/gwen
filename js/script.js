var flightPrice = function(){
  var from = document.getElementById('place1').value
  var to = document.getElementById('place2').value
  var price
  if(from=="France"&&to=="New York"){
    price = 0
    return price
  }
  else if(from=="France"&&to=="Australia"){
    price = 0
    return price
  }
  else if(from=="France"&&to=="Hawaii"){
    price = 0
    return price
  }
  else if(from=="France"&&to=="France"){
    price = 0
    return price
  }
  else if(from=="France"&&to=="Japan"){
    price = 0
    return price
  }
  else if(from=="New York"&&to=="New York"){
    price = 0
    return price
  }
  else if(from=="New York"&&to=="France"){
    price = 0
    return price
  }
  else if(from=="New York"&&to=="Hawaii"){
    price = 0
    return price
  }
  else if(from=="New York"&&to=="Australia"){
    price = 0
    return price
  }
  else if(from=="New York"&&to=="Japan"){
    price = 0
    return price
  }
    else if(from=="Australia"&&to=="New York"){
    price = 0
    return price
  }
  else if(from=="Australia"&&to=="France"){
    price = 0
    return price
  }
  else if(from=="Australia"&&to=="Hawaii"){
    price = 0
    return price
  }
  else if(from=="Australia"&&to=="Australia"){
    price = 0
    return price
  }
  else if(from=="Australia"&&to=="Japan"){
    price = 0
    return price
  }
  else if(from=="Hawaii"&&to=="New York"){
    price = 0
    return price
  }
  else if(from=="Hawaii"&&to=="France"){
    price = 0
    return price
  }
  else if(from=="Hawaii"&&to=="Hawaii"){
    price = 0
    return price
  }
  else if(from=="Hawaii"&&to=="Australia"){
    price = 0
    return price
  }
  else if(from=="Hawaii"&&to=="Japan"){
    price = 0
    return price
  }
else if(from=="Japan"&&to=="New York"){
    price = 0
    return price
  }
  else if(from=="Japan"&&to=="France"){
    price = 0
    return price
  }
  else if(from=="Japan"&&to=="Hawaii"){
    price = 0
    return price
  }
  else if(from=="Japan"&&to=="Australia"){
    price = 0
    return price
  }
  else if(from=="Japan"&&to=="Japan"){
    price = 0
    return price
  }
}
var alertPrice = function(){
  var place1=document.getElementById('place1').value
  var place2=document.getElementById('place2').value
  var name=document.getElementById('name').value
  var date=document.getElementById('date').value
  var date2=document.getElementById('date2').value
  var child=document.getElementById('child').checked
  var amount=document.getElementById('amount').value
  var price = flightPrice()
  alert("Hello " + name + ", the price for your destination from " + place1 + " to " + place2 + " and back is " + price*2 + " Pesos" + " at " + date + " to " + date2 ". You will have children in your package and the total price is: " + (amount*(price*2)) + "Pesos." )
}
