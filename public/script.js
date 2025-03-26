/*
 to respond to the submit button
*/
document.getElementById("input_form").onsubmit = function() {
  const formData = new FormData(this);
  let output = "<h2>Output</h2>";
  formData.forEach((value, key) => {
    output += `<p>${key}: ${value}</p>`;
  });
  document.getElementById("output").innerHTML = output;
};

  
    /* Use the songs below needed in this exercise:
    
    the Good Fellow replacing blanks with either he's or she's
    
    For ______ a jolly good fellow. For _______ a jolly good fellow. For ________ a jolly good fellow, which nobody can deny!

    The Happy Birthday, replacing the blank with the name of the celebrant

  Happy birthday to you. Happy birthday to you. Happy birthday dear ________. Happy birthday to you!`.split(' ');
 
    */


  
}

  // PLEASE STUDY THE CODES BELOW, BUT DO NOT CHANGE ANYTHING 

  // this function will create the needed input fields and corresponding Going checkboxes for the number of expected guests

  
  // A quick data dump on Output div to show users input on the browser.
  function printFormData() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2> Output <h2>';
    for (let [key, value] of formData.entries()){
      outputDiv.innerHTML += `${key}: ${value} <br>`;
    }
    const myData = Object.fromEntries(formData.entries());
    console.log(myData)
    console.log(formData.entries())
  }
