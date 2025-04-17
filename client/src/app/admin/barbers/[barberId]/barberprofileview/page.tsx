"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/app/store";
import { fetchBarbers , deleteBarber} from "@/redux/features/BarberSlice";
import { useParams , useRouter} from "next/navigation";
import { User, Scissors, Trash2, Edit } from "lucide-react";

interface Appointment {
  date: string;
  time: string;
}

interface BarberProfile {
  _id: string;
  employeeName: string;
  employeeFees: number;
  specialCut: string;
  description?: string;
  employeeImage?: string;
  pendingAppointments: Appointment[];
  completedAppointments: Appointment[];
}

const ProfileView: React.FC = () => {
  const params = useParams<{ barberId: string }>();
  const id = params?.barberId ?? "";
  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();
  const { barbers, loading, error } = useSelector((state: RootState) => state.barber);

  const data = barbers.find((barber) => barber._id === id);

  useEffect(() => {
    dispatch(fetchBarbers());
  }, [dispatch]);

  const handleDelete = (barberId: string) => {
    router.push('/admin/barbers')
    dispatch(deleteBarber(barberId))
  }
  
  
  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!barbers || barbers.length === 0) return <div className="text-white text-center">No barbers found.</div>;

  const profile: BarberProfile = {
    _id: data?._id || "Not Found",
    employeeName: data?.employeeName || "No Barber",
    employeeFees: data?.employeeFees || 250,
    specialCut: data?.specialCut || "No specialCut",
    description: data?.description || "No description available",
    employeeImage: data?.employeeImage || "/avatar-placeholder.png",
    pendingAppointments: [
      { date: "4/16/2025", time: "10:00 AM" },
      { date: "4/16/2025", time: "1:00 PM" },
      { date: "4/16/2025", time: "4:00 PM" },
      { date: "4/17/2025", time: "12:00 PM" },
    ],
    completedAppointments: [
      { date: "4/14/2025", time: "11:00 AM" },
      { date: "4/14/2025", time: "2:00 PM" },
      { date: "4/15/2025", time: "10:30 AM" },
      { date: "4/15/2025", time: "3:30 PM" },
    ],
  };

  return (
    <div className="bg-[#1B1B1A] text-[#D6D7D6] min-h-screen p-6 font-sans">

      <div className="max-w-5xl mx-auto border border-[#757442] rounded-2xl p-10 shadow-xl bg-[#2B2B2B] transition-all duration-300">

        <h2 className="text-center text-3xl font-bold mb-10 text-[#D6D7D6] tracking-wide">
          ✂️ Barber Profile
        </h2>

        {/* Profile Card */}
        <div className="relative flex flex-col md:flex-row gap-6 items-center mb-12 border-l-[6px] border-[#757442] bg-[#2B2B2B] rounded-xl p-6 shadow-xl group hover:scale-[1.01] transition-transform duration-300 ease-in-out">

          <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#757442] border-l-transparent rounded-tr-lg" />

          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#757442] shadow-md bg-gray-800">
            <img
              src={profile?.employeeImage}
              alt={profile.employeeName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 mt-4 md:mt-0 text-left">
            <h3 className="text-2xl font-semibold mb-1">{profile.employeeName}</h3>
            <p className="mb-1 text-lg"><Scissors className="inline mr-2" /> <strong>Special Cut:</strong> {profile.specialCut}</p>
            <p className="mb-2 text-lg"><strong>Fees:</strong> ₹{profile.employeeFees}</p>
            <p className="text-gray-400 text-sm italic">{profile.description}</p>

            <div className="flex gap-4 mt-6">
              {/* <button className="bg-[#fffb00] text-black font-medium px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
                <User className="inline mr-2 w-4 h-4" /> Present
              </button> */}
              <button className="bg-red-600 text-white font-medium px-4 py-2 rounded-full text-sm hover:bg-red-500 transition"
              // onClick={() => dispatch(deleteBarber(profile?._id))}
              onClick={() => handleDelete(profile._id)}
              >
                <Trash2 className="inline mr-2 w-4 h-4" /> Delete
              </button>
              <button className="bg-green-600 text-white font-medium px-4 py-2 rounded-full text-sm hover:bg-green-500 transition">
                <Edit className="inline mr-2 w-4 h-4" /> Edit
              </button>
            </div>
          </div>
        </div>

        {/* Appointments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1B1B1A] border border-[#757442] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">📅 Pending Appointments</h3>
            {profile.pendingAppointments.map((a, i) => (
              <div
                key={i}
                className="bg-[#3a3a3a] text-sm px-4 py-2 rounded-md mb-2 flex justify-between items-center hover:bg-[#444] transition"
              >
                <span>{a.date}</span>
                <span className="text-[#fffb00]">{a.time}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#1B1B1A] border border-[#757442] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">✅ Completed Appointments</h3>
            {profile.completedAppointments.map((a, i) => (
              <div
                key={i}
                className="bg-[#3a3a3a] text-sm px-4 py-2 rounded-md mb-2 flex justify-between items-center hover:bg-[#444] transition"
              >
                <span>{a.date}</span>
                <span className="text-green-400">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
