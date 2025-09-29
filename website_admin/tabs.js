function switchAuthTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tab + '-tab').classList.add('active');
}

function switchTab(tab) {
    document.querySelectorAll('#main-app .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('#main-app .tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tab + '-tab').classList.add('active');
}

function showMessage(message, type) {
    const messagesDiv = document.getElementById('messages');
    const messageEl = document.createElement('div');
    messageEl.className = `message ${type}`;
    messageEl.textContent = message;
    
    messagesDiv.innerHTML = '';
    messagesDiv.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.remove();
    }, 5000);
}

// Make functions available globally
window.switchAuthTab = switchAuthTab;
window.switchTab = switchTab;
window.showMessage = showMessage;