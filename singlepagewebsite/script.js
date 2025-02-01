function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let name = document.getElementById("recommend_name").value.trim(); // Get name (if any)

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value.trim() !== "") {
    console.log("New recommendation added");

    // Call showPopup to display the success message
    showPopup(true);

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");

    // Format recommendation with name if provided
    let recommendationText = `<span>&#8220;</span> ${recommendation.value} <span>&#8221;</span>`;
    if (name) {
      recommendationText += `<br><strong>- ${name}</strong>`; // Add name below the recommendation
    }

    element.innerHTML = recommendationText;

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea and name field
    recommendation.value = "";
    document.getElementById("recommend_name").value = "";
  }
}

function showPopup(bool) {
  let popup = document.getElementById('popup');
  popup.style.visibility = bool ? 'visible' : 'hidden';

  // Optional: Hide the popup automatically after 3 seconds
  if (bool) {
    setTimeout(() => showPopup(false), 3000);
  }
}
