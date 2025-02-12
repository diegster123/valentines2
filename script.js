// Function to navigate to the next page
function nextPage() {
	if (window.location.pathname.endsWith('index.html')) {
	  window.location.href = 'question.html';
	} else if (window.location.pathname.endsWith('question.html')) {
	  window.location.href = 'valentine.html';
	}
  }
  
  // Valentine Page Functionality
  if (window.location.pathname.endsWith('valentine.html')) {
	const yesBtn = document.getElementById('yes-btn');
	const noBtn = document.getElementById('no-btn');
  
	// Move the "No" button randomly on hover or click
	noBtn.addEventListener('mouseover', moveButton);
	noBtn.addEventListener('click', moveButton);
  
	function moveButton() {
	  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
	  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
	  noBtn.style.position = 'absolute';
	  noBtn.style.left = `${x}px`;
	  noBtn.style.top = `${y}px`;
	}
  
	// Handle "Yes" button click
	yesBtn.addEventListener('click', () => {
	  alert('Yay! You made me the happiest person! ❤️');
	  // TODO: Add email notification functionality here
	});
  }