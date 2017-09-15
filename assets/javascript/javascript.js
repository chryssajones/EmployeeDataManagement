  var config = {
    apiKey: "AIzaSyBsmd71nuZWhANWNP0KMDhhKrwixo1rOVc",
    authDomain: "employeedatabase-fdca6.firebaseapp.com",
    databaseURL: "https://employeedatabase-fdca6.firebaseio.com",
    projectId: "employeedatabase-fdca6",
    storageBucket: "",
    messagingSenderId: "476499000730"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

	var employee = "";
	var role = "";
	var startDate = "";
	var monthlyRate = "";
	var monthsWorked = "";
	var totalBilled = "";

$("#addUser").on("click", function(event){
     event.preventDefault();

   // Grabbed values from text boxes
      employee = $("#name").val().trim();
      role = $("#role").val().trim();
      startDate = $("#start").val().trim();
      monthlyRate = $("#rate").val().trim();
      monthsWorked = $("#months").val().trim();
      totalBilled = $("#billed").val().trim();

// Code for handling the push
      database.ref("/users").push({
        employee: employee,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        monthsWorked: monthsWorked,
        totalBilled: totalBilled
	});

     database.ref("/users").on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().employee);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startDate);
      console.log(childSnapshot.val().monthlyRate);
      console.log(childSnapshot.val().monthsWorked);
      console.log(childSnapshot.val().totalBilled);

      // full list of items to the well
	$("#nameTable").text(childSnapshot.val().employee);
	$("#roleTable").text(childSnapshot.val().role);
	$("#startTable").text(childSnapshot.val().startDate);
	$("#monthsTable").text(childSnapshot.val().monthsWorked);
	$("#rateTable").text(childSnapshot.val().monthlyRate);
	$("#totalTable").text(childSnapshot.val().totalBilled);


    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


  });