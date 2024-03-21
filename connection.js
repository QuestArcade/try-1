function checkMetaMaskConnection() {
  // Check if MetaMask is installed and enabled
  if (typeof window.ethereum !== 'undefined') {
      // MetaMask is installed
      // Check if user is connected to MetaMask
      ethereum.request({ method: 'eth_accounts' })
      .then(accounts => {
          if (accounts.length === 0) {
              // User is not connected to MetaMask
              window.location.href = 'connect.html';
          } else {
              // User is connected to MetaMask
              console.log('User is connected to MetaMask');
          }
      })
      .catch(err => {
          console.error('Error:', err);
      });
  } else {
      // MetaMask is not installed
      console.log('MetaMask is not installed');
      // You may choose to handle this case differently, like displaying a message to the user.
  }
}

// Check MetaMask connection every 2 seconds (2000 milliseconds)
setInterval(checkMetaMaskConnection, 2000);

// Initial check when the page loads
checkMetaMaskConnection();