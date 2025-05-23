"use client";

import { use } from "react";
import PolicyCard from "./policy-card.js"
import { getToken } from "@/app/utils/authUtils.js"
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link.js";


export default function Dashboard() {
  const token = getToken();

  const policies = [
    {
      id: 1,
      title: "Health Insurance 2025",
      description: "Primary care, ER coverage, generic prescriptions covered. Some hidden fees detected.",
      removalTime: "3 Days",
    },
    {
      id: 2,
      title: "Dental Plan",
      description: "Annual checkups, cleanings 100% covered. Limited coverage on major dental work.",
      removalTime: "1 Days",
    },
    {
      id: 3,
      title: "Vision Coverage Plan",
      description: "Eye exams, basic frames included. Specialist visits require copay.",
      removalTime: "12 Hours",
    },
    {
      id: 4,
      title: "Aetna Coverage",
      description: "Check-ups covered. Prescriptions and specialists require copay.",
      removalTime: "5 Days",
    },
  ]

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
    },
    main: {
      flex: 1,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#3b82f6",
      marginBottom: "0.5rem",
      textAlign: "center",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#333",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    uploadButton: {
      backgroundColor: "#f97316",
      color: "white",
      padding: "0.75rem 1.5rem",
      borderRadius: "2rem",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      marginBottom: "2rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
      width: "100%",
      maxWidth: "1200px",
      justifyContent: "center",
    },
  }
  

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 style={styles.title}>Welcome to Your Dashboard</h1>
        <p style={styles.subtitle}>Here are your uploaded policies and summaries:</p>

        <Link href="/upload" style={styles.uploadButton}>
          <span>+</span> Upload New Policy
        </Link>

        <div style={styles.cardsContainer}>
          {policies.map((policy) => (
            <PolicyCard
              key={policy.id}
              title={policy.title}
              description={policy.description}
              removalTime={policy.removalTime}
            />
          ))}
        </div>
      </main>
    </div>
  )
}