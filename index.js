// 1. Event Handling
document.getElementById('clickMeBtn').addEventListener('click', () => {
    document.getElementById('clickMessage').textContent = "Button clicked!";
  });
  
  document.getElementById('hoverBox').addEventListener('mouseover', () => {
    document.getElementById('hoverBox').style.backgroundColor = '#add8e6';
  });
  document.getElementById('hoverBox').addEventListener('mouseout', () => {
    document.getElementById('hoverBox').style.backgroundColor = 'lightgray';
  });
  
  document.getElementById('keyInput').addEventListener('keypress', (e) => {
    console.log("Key pressed: ", e.key);
  });
  
  // Bonus: Double-click
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    document.getElementById('secretMessage').textContent = "You found the secret!";
  });
  
  // 2. Interactive Elements
  document.getElementById('colorChangerBtn').addEventListener('click', (e) => {
    e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  });
  
  // Tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(`tab${tab.dataset.tab}`).classList.add('active');
    });
  });
  
  // 3. Form Validation
  document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    let feedback = '';
  
    if (!name || !email || password.length < 8) {
      feedback = "Please fill all fields correctly.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      feedback = "Invalid email format.";
    } else {
      feedback = "Form submitted successfully! 🎉";
    }
  
    document.getElementById('formFeedback').textContent = feedback;
  });
  
  // Bonus: Real-time feedback
  document.getElementById('password').addEventListener('input', (e) => {
    const feedback = e.target.value.length < 8 ? "Password too short" : "Password looks good";
    document.getElementById('formFeedback').textContent = feedback;
  });
  