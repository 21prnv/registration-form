function ageCalculator() {
  var userinput = document.getElementById("birth").value;
  var dob = new Date(userinput);
  if (userinput == null || userinput == "") {
    document.getElementById("message").innerHTML = "**Choose a date please!";
    return false;
  } else {
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    if (age <= 18) {
      document.getElementById("result").innerHTML =
        "Your Not Elgible For This Because Your Age Is " + age;
      document.getElementById("btn").disabled = true;
      document.getElementById("btn").innerHTML =
        "Please Select Your Age Over Than 18";
      document.getElementById("result").style.color = "red";
    } else {
      document.getElementById("result").innerHTML =
        "Your Elgible For This Because Your Age Is " + age;
      document.getElementById("btn").disabled = false;
      document.getElementById("btn").innerHTML = "Register";
      document.getElementById("result").style.color = "green";
    }

    //display the calculated age
    return age;
  }
}
function store() {
  var brand = document.getElementById("carBrand").value;
  var price = document.getElementById("carPrice").value;
  var key = document.getElementById("key").value;
  var birth = document.getElementById("birth").value;

  const car = {
    brand: brand,
    price: price,
    birth: birth,
  };

  window.localStorage.setItem(key, JSON.stringify(car));
}

function retrieveRecords() {
  // var key = document.getElementById('retrieveKey').value;
  for (let i = 0; i < localStorage.length; i++) {
    let storedValue = localStorage.key(i);
    console.log(`Item at ${i}: ${storedValue}`);
  }
  console.log("retrive records");
  // var records = window.localStorage.getItem(key);
  var paragraph = document.createElement("li");
  var infor = document.createTextNode(storedValue);
  paragraph.appendChild(infor);
  var element = document.getElementById("retrieve");
  element.appendChild(paragraph);
}

Object.keys(localStorage).forEach((key) => {
  // var v= localStorage.getItem(key);
  // console.log(typeof(v));

  // console.log(JSON.parse(v));
  let abc = JSON.parse(localStorage[key]);
  let def =
    "phone:: " +
    key +
    " username:: " +
    abc.brand +
    " birthdate:: " +
    abc.birth +
    " Email:: " +
    abc.price;
  var paragraph = document.createElement("li");
  var infor = document.createTextNode(def);
  paragraph.appendChild(infor);
  var element = document.getElementById("retrieve");
  element.appendChild(paragraph);
  // sconsole.log(localStorage.getItem(key));
});

window.onload = function () {
  document.getElementById("carForm").onsubmit = store;
  document.getElementById("retrieveButton").onclick = retrieveRecords;
};
