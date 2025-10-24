import Footer from './pages/Footer';
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />

        {/* Features Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold mb-10 text-indigo-700">
            ✨ Key Features of Our College Event Management System
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Event Creation & Management
              </h3>
              <p className="text-gray-600">
                Organizers can easily create, edit, and manage events with detailed information like title, description, date, time, and venue.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Online Ticket Booking
              </h3>
              <p className="text-gray-600">
                Students can register or book tickets online, making participation simple and paperless.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                User Profiles & Authentication
              </h3>
              <p className="text-gray-600">
                Secure login and registration for users using email and password, ensuring data privacy and personalized access.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Event Insights & Analytics
              </h3>
              <p className="text-gray-600">
                Organizers can view participant counts, ticket sales, and income reports for each event in real time.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Likes & Comments
              </h3>
              <p className="text-gray-600">
                Users can like and comment on events to share feedback and engage with other participants.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Admin Dashboard
              </h3>
              <p className="text-gray-600">
                Admins can monitor all events, manage users, and ensure smooth functioning of the entire event ecosystem.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
