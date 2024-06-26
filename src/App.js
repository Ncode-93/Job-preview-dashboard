// import './App.css';
// import NavBar from './Components/NavBar';

// function App() {
//   return (
//     <NavBar />
//   );
// }

// export default App;
import React from 'react';
import { Briefcase, MessageSquare, CreditCard, MapPin, DollarSign, User, Users, MessageCircle, Eye, Trash2, Edit } from 'lucide-react';

const JobPreviewDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-orange-500 font-bold bg-gray-200 px-4 py-2">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-full"><Briefcase className="mr-2" size={18} /> Jobs</button></li>
              <li><button className="flex items-center px-4 py-2 text-gray-600"><MessageSquare className="mr-2" size={18} /> Messages</button></li>
              <li><button className="flex items-center px-4 py-2 text-gray-600"><CreditCard className="mr-2" size={18} /> Payments</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8">
          <ul className="flex border-b">
            <li className="mr-6"><a href="#" className="text-orange-500 border-b-2 border-orange-500 pb-2">Job preview</a></li>
            <li className="mr-6"><a href="#" className="text-gray-500">Applicants</a></li>
            <li className="mr-6"><a href="#" className="text-gray-500">Match</a></li>
            <li className="mr-6"><a href="#" className="text-gray-500">Messages</a></li>
          </ul>
        </nav>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Senior Product Designer</h1>
              <div className="text-sm text-gray-500 mb-2">posted 2 days ago <span className="ml-2 text-green-500">• Open</span></div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={18} className="mr-2" />
                <span>Delaware, USA</span>
                <DollarSign size={18} className="ml-4 mr-2" />
                <span>$300k-$400k</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg flex items-center">
                <Trash2 size={18} className="mr-2" />
                Delete Job
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center">
                <Edit size={18} className="mr-2" />
                Edit Job
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-lg font-semibold mb-2">Skills Required</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">Figma</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Adobe Illustrator</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Adobe XD</span>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Preferred Language</h2>
              <p>English</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Type</h2>
              <p>Full time</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Years of Experience</h2>
              <p>3+ Years of Experience</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">About the job</h2>
            <ol className="list-decimal pl-5">
              <li>Handle the UI/UX research design</li>
              <li>Work on researching on latest web applications designs & trends</li>
              <li>Work on conceptualizing and visualizing</li>
              <li>Work on creating graphics content and other graphic related works</li>
            </ol>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Benefits:</h2>
            <ul className="list-disc pl-5">
              <li>Health insurance</li>
              <li>Provident Fund</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Schedule:</h2>
            <ul className="list-disc pl-5">
              <li>Day shift</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Supplemental pay types:</h2>
            <ul className="list-disc pl-5">
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Work Location:</h2>
            <p>In person</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/48/48" alt="Atlassian logo" className="mr-2" />
              <h2 className="text-lg font-semibold">Atlassian</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Company size</h3>
                <p>1k - 2k Employees</p>
              </div>
              <div>
                <h3 className="font-semibold">Type</h3>
                <p>Private</p>
              </div>
              <div>
                <h3 className="font-semibold">Sector</h3>
                <p>Information Technology, Infrastructure</p>
              </div>
              <div>
                <h3 className="font-semibold">Funding</h3>
                <p>Bootstrapped</p>
              </div>
              <div>
                <h3 className="font-semibold">Founded In</h3>
                <p>2019</p>
              </div>
              <div>
                <h3 className="font-semibold">Founded By</h3>
                <p>Scott Farquhar, Mike Cannon-Brookes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="flex items-center text-gray-700">
              <User className="mr-2" size={18} />
              Applicants
            </span>
            <span className="font-bold">400</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center text-gray-700">
              <Users className="mr-2" size={18} />
              Matches
            </span>
            <span className="font-bold">100</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center text-gray-700">
              <MessageCircle className="mr-2" size={18} />
              Messages
            </span>
            <span className="font-bold">147</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center text-gray-700">
              <Eye className="mr-2" size={18} />
              Views
            </span>
            <span className="font-bold">800</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobPreviewDashboard;