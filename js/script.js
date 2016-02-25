var flightPrice = function(){
  var from = document.getElementById('place1').value
  var to = document.getElementById('place2').value
  var price
  if(from=="France"&&to=="New York"){
    price = "0 Pesos"
    return price
  }
  else if(from=="France"&&to=="Australia"){
    price = "0 Pesos"
    return price
  }
  else if(from=="France"&&to=="Hawaii"){
    price = "0 Pesos"
    return price
  }
  else if(from=="France"&&to=="France"){
    price = "0 Pesos"
    return price
  }
  else if(from=="France"&&to=="Japan"){
    price = "0 Pesos"
    return price
  }
  else if(from=="New York"&&to=="New York"){
    price = "0 Pesos"
    return price
  }
  else if(from=="New York"&&to=="France"){
    price = "0 Pesos"
    return price
  }
  else if(from=="New York"&&to=="Hawaii"){
    price = "0 Pesos"
    return price
  }
  else if(from=="New York"&&to=="Australia"){
    price = "0 Pesos"
    return price
  }
  else if(from=="New York"&&to=="Japan"){
    price = "0 Pesos"
    return price
  }
    else if(from=="Australia"&&to=="New York"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Australia"&&to=="France"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Australia"&&to=="Hawaii"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Australia"&&to=="Australia"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Australia"&&to=="Japan"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Hawaii"&&to=="New York"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Hawaii"&&to=="France"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Hawaii"&&to=="Hawaii"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Hawaii"&&to=="Australia"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Hawaii"&&to=="Japan"){
    price = "0 Pesos"
    return price
  }
else if(from=="Japan"&&to=="New York"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Japan"&&to=="France"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Japan"&&to=="Hawaii"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Japan"&&to=="Australia"){
    price = "0 Pesos"
    return price
  }
  else if(from=="Japan"&&to=="Japan"){
    price = "0 Pesos"
    return price
  }
}
var alertPrice = function(){
  var name=document.getElementById('name').value
  var date=document.getElementById('date').value
  alert("Hello "+name+" The price for your destination is " + flightPrice() + " at " + date)
}
