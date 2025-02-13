// Get elements
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const popup = document.getElementById("popup");
const messageForm = document.getElementById("message-form");
const replayBtn = document.getElementById("replay-btn");

// Function to navigate to the next page
function nextPage() {
	if (window.location.pathname.endsWith("index.html")) {
		window.location.href = "pages/question.html";
	} else if (window.location.pathname.endsWith("pages/question.html")) {
		window.location.href = "valentine.html";
	}
}

// Show popup when "Yes" is clicked
yesBtn.addEventListener("click", () => {
	popup.style.display = "flex";
});

// Move the "No" button randomly on hover or click
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
	const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
	const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
	noBtn.style.position = "absolute";
	noBtn.style.left = `${x}px`;
	noBtn.style.top = `${y}px`;
}

// Handle form submission
messageForm.addEventListener("submit", async (e) => {
	e.preventDefault(); // Prevent the default form submission

	const formData = new FormData(messageForm);

	try {
		const response = await fetch(messageForm.action, {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		});

		if (response.ok) {
			// Show the replay button after successful submission
			replayBtn.style.display = "block";
			messageForm.style.display = "none"; // Hide the form
		} else {
			alert("Something went wrong. Please try again.");
		}
	} catch (error) {
		alert("Something went wrong. Please try again.");
	}
});

// Handle replay button click
replayBtn.addEventListener("click", () => {
	window.location.href = "../pages/index.html"; // Redirect to landing page
});

// Close popup when clicking outside of it
popup.addEventListener("click", (e) => {
	if (e.target === popup) {
		popup.style.display = "none";
	}
});
