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