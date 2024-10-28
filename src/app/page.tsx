"use client";
import Image from "next/image";


export default function Home() {
  return (
    <main>
       <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <nav className="space-x-4">
          <a href="#" className="text-blue-500 hover:underline">Personal</a>
          <a href="#" className="text-blue-500 hover:underline">Student</a>
          <a href="#" className="text-blue-500 hover:underline">Portfolio</a>
        </nav>
      </header>

      <div className="flex items-center mb-6">
        <Image
          src="/path-to-image.jpg"
          alt="Student"
          className="w-24 h-24 rounded-full mr-4"
          width={100}
          height={100}
        />
        <div>
          <h2 className="text-xl font-semibold">Student Name</h2>
          <p className="text-gray-600">Next.js | TypeScript</p>
        </div>
      </div>

      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-bold mb-2">Personal Checkpoints</h3>
          <p>CPS: 75%</p>
          <p>GS: 65%</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-bold mb-2">Main Contenders</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Add New</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded ml-2">View All</button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-bold mb-2">Checkpoints</h3>
          <p>Checkpoints avg: 80%</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-bold mb-2">Challenger Sprints</h3>
          <ul>
            <li>Challenger 1</li>
            <li>Challenger 2</li>
          </ul>
        </div>
      </section>
    </div>
    </main>
  );
}
