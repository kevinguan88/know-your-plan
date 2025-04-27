"use client"

import React from 'react';

export default function SimplePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Simple Page</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <p className="text-xl text-gray-800">Welcome to the simple page.</p>
      </main>
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2023 Simple Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

