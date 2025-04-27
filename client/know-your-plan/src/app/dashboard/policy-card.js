export default function PolicyCard({ title, description, removalTime }) {
    const styles = {
      card: {
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", // make content spread
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        textAlign: "center",
        width: "400px",        // fixed width
        height: "300px",       // fixed height
      },
      title: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "#3b82f6",
        marginBottom: "1rem",
      },
      description: {
        color: "#4b5563",
        marginBottom: "1.5rem",
        lineHeight: "1.5",
        flexGrow: 1, // makes description stretch a bit
      },
      viewButton: {
        backgroundColor: "#3b82f6",
        color: "white",
        padding: "0.5rem 1.25rem",
        borderRadius: "2rem",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        marginBottom: "1rem",
      },
      removalText: {
        color: "#ef4444",
        fontSize: "0.875rem",
      },
    }
  
    return (
      <div style={styles.card}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <button style={styles.viewButton}>View Summary</button>
        <p style={styles.removalText}>Removal In: {removalTime}</p>
      </div>
    )
  }export default function PolicyCard({ title, description, removalTime }) {
  const styles = {
    card: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between", // make content spread
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      textAlign: "center",
      width: "400px",        // fixed width
      height: "300px",       // fixed height
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      color: "#3b82f6",
      marginBottom: "1rem",
    },
    description: {
      color: "#4b5563",
      marginBottom: "1.5rem",
      lineHeight: "1.5",
      flexGrow: 1, // makes description stretch a bit
    },
    viewButton: {
      backgroundColor: "#3b82f6",
      color: "white",
      padding: "0.5rem 1.25rem",
      borderRadius: "2rem",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    removalText: {
      color: "#ef4444",
      fontSize: "0.875rem",
    },
  }

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
      <button style={styles.viewButton}>View Summary</button>
      <p style={styles.removalText}>Removal In: {removalTime}</p>
    </div>
  )
}
