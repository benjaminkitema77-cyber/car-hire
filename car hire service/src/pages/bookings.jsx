import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Bookings() {
  const bookings = [
    {
      id: 1,
      car: "Mercedes AMG E53",
      startDate: "25 November 2026",
      endDate: "28 November 2026",
      totalPrice: 66000,
      status: "Confirmed",
    },
    {
      id: 2,
      car: "RAM TRX",
      startDate: "2 December 2026",
      endDate: "4 December 2026",
      totalPrice: 60000,
      status: "Pending",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-slate-100 min-h-screen px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-4">
          My Bookings
        </h1>

        <p className="text-center text-slate-600 mb-10">
          View and manage your car rental bookings.
        </p>

        <div className="max-w-4xl mx-auto space-y-6">

          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">

                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    {booking.car}
                  </h2>

                  <p className="text-gray-600 mb-2">
                    Pick-up: {booking.startDate}
                  </p>

                  <p className="text-gray-600 mb-2">
                    Return: {booking.endDate}
                  </p>

                  <p className="text-orange-500 font-bold text-lg mt-3">
                    KSh {booking.totalPrice.toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start md:items-end">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg mt-4">
                    Cancel Booking
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Bookings;