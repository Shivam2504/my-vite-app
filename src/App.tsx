import React from 'react';
import { Droplets, Home, Info, Lightbulb, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">WaterWise</span>
            </div>
            <div className="flex items-center space-x-4">
              <NavLink icon={<Home size={18} />} text="Home" />
              <NavLink icon={<Info size={18} />} text="About" />
              <NavLink icon={<Users size={18} />} text="Get Involved" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&q=80"
            alt="Water droplet"
          />
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-40" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every Drop Counts
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Join us in preserving Earth's most precious resource. Small changes in our daily habits
            can make a significant impact on water conservation.
          </p>
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Learn How to Help
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <StatCard
              number="71%"
              text="of Earth's surface is water, but only 3% is fresh water"
            />
            <StatCard
              number="2.7B"
              text="people affected by water scarcity at least one month per year"
            />
            <StatCard
              number="4,000"
              text="gallons of water can be saved per month with simple changes"
            />
          </div>
        </div>
      </div>

      {/* Conservation Tips */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Simple Ways to Save Water
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <TipCard
              title="Fix Leaky Faucets"
              description="A dripping faucet can waste more than 3,000 gallons per year"
            />
            <TipCard
              title="Shorter Showers"
              description="Reducing shower time by 2 minutes saves 1,600 gallons per year"
            />
            <TipCard
              title="Water-Efficient Appliances"
              description="Modern appliances use 30-50% less water than traditional models"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About WaterWise</h3>
              <p className="text-gray-400">
                Dedicated to promoting water conservation through education and community engagement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: mrshivamkumar2504@gmail.com</p>
              <p className="text-gray-400">Phone: 8405915998</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition duration-150"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="bg-blue-50 rounded-lg p-8 text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

function TipCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <Lightbulb className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;