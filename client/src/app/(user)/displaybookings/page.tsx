"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/app/store';
import { getMyBookings } from '@/redux/features/AppoinmentSlice';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { toast, Toaster } from 'sonner';

const MyBookingsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useUser();
  const userId = user?.id;

  const { myBookings, loading, error } = useSelector(
    (state: RootState) => state.appointment
  );

  useEffect(() => {
    if (userId) {
      dispatch(getMyBookings(userId));
      toast.info("This is booking list page");
    }
  }, [userId, dispatch]);

  return (
    <div className="min-h-screen px-6 pt-28 pb-10 bg-[#121212] text-[#E0E0E0]">
       <Toaster  />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#d8a60d]">My Bookings</h1>

        {loading && <p className="text-yellow-500">Loading your bookings...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && myBookings.length === 0 && (
          <p className="text-gray-400 italic">No bookings found for your account.</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {myBookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-[#1E1E1E] p-6 rounded-2xl border border-[#454037] hover:border-[#e9cd81] transition-all duration-300 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#987b22] mb-4">Booking Info</h3>

              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-400">Date:</span> {moment(booking?.date).format('YYYY-MM-DD')}
                </p>
                <p>
                  <span className="text-gray-400">Time:</span> {booking.timeSlot}
                </p>
                <p>
                  <span className="text-gray-400">Status:</span>{' '}
                  <span
                    className={`font-semibold ${booking.status === 'approved'
                        ? 'text-green-400'
                        : booking.status === 'declined'
                          ? 'text-red-400'
                          : 'text-yellow-400'
                      }`}
                  >
                    {booking.status}
                  </span>
                </p>
                <p>
                  <span className="text-gray-400">Payment:</span>{' '}
                  {booking.paymentStatus === 'paid' ? ' Paid' : 'Unpaid'}
                </p>
                <p>
                  <span className="text-gray-400">Price:</span>{' '}
                  <span className="font-bold">₹{booking.price}</span>
                </p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-[#757442] font-semibold mb-1">Services:</p>
                <div className="flex flex-wrap gap-2">
                  {booking.serviceId?.map((service, idx) => (
                    <span
                      key={idx}
                      className="bg-[#2B2B2B] text-[#DBCBBD] text-xs px-3 py-1 rounded-full border border-[#3f3f3f]"
                    >
                      {service.serviceName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
