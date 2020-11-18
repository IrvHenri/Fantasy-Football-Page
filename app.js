let emailCollectorForm = document.getElementById("Email-Collector");

////// Submit Form Event-listener////////

emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("firstName");
  let userEmail = ourFormData.get("emailAddress");
  let updatedHtmlContent = `

  <h2>Congratulations, ${userFirstName} !</h2>
  
  <p> You're on your way to becoming an insider! </p>
  
  <p class="fine-print"> Your first free article will be sent to: ${userEmail} </p> 
  `;
  let ourMainContent = document.getElementById("Main-Content");

  ourMainContent.innerHTML = updatedHtmlContent;
});
