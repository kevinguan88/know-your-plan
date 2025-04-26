import React from 'react';

function App() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
    },
    formCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      padding: '40px',
      width: '100%',
      maxWidth: '500px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      color: '#2F5BEA',
      fontSize: '2.5rem',
      marginBottom: '5px',
      fontWeight: '600',
    },
    underline: {
      width: '50px',
      height: '4px',
      backgroundColor: '#2F5BEA', // made the underline match the title color
      borderRadius: '2px',
      marginBottom: '30px',
    },
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    inputGroup: {
      position: 'relative',
      width: '100%',
    },
    icon: {
      position: 'absolute',
      left: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#888',
      fontSize: '18px',
    },
    input: {
      width: '100%',
      padding: '15px 15px 15px 45px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      fontSize: '16px',
      outline: 'none',
      color: '#000', // <-- now your text is black and visible
    },
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
    },
    signUpButton: {
      flex: '1',
      padding: '15px',
      border: 'none',
      borderRadius: '30px',
      fontSize: '16px',
      cursor: 'pointer',
      fontWeight: '500',
      backgroundColor: '#2F5BEA',
      color: '#FFFFFF',
      transition: 'all 0.3s ease',
    },
    loginButton: {
      flex: '1',
      padding: '15px',
      border: 'none',
      borderRadius: '30px',
      fontSize: '16px',
      cursor: 'pointer',
      fontWeight: '500',
      backgroundColor: '#2F5BEA',
      color: '#FFFFFF',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>Login</h1>
        <div style={styles.underline}></div>

        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <span style={styles.icon}>✉️</span>
            <input type="email" placeholder="Email Address" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <span style={styles.icon}>🔒</span>
            <input type="password" placeholder="Password" style={styles.input} />
          </div>

        
          <div style={styles.buttonGroup}>
            <button type="button" style={styles.loginButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
