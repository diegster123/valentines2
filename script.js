// Get the buttons
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// Function to move the "No" button randomly
noBtn.addEventListener("mouseover", () => {
	const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
	const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
	noBtn.style.position = "absolute";
	noBtn.style.left = `${x}px`;
	noBtn.style.top = `${y}px`;
});

// Function to handle the "Yes" button click
yesBtn.addEventListener("click", () => {
	alert("Yay! You made me the happiest person! ❤️");
	// TODO: Add email notification functionality here
});
