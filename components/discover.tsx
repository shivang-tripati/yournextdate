"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "@/components/ui/caraousel"; // Adjust import path if needed
import Image from "next/image";
import { FaHeart, FaEnvelope } from "react-icons/fa";

import { images1 } from "@/utils/image";
import {
  fakeNearbyUsers,
  fakeCityUsers,
  fakeCommonInterestUsers,
  fakeRecommendedUsers,
} from "@/utils/data";

interface UserProfile {
  profilePictureUrl: string;
}

interface User {
  id: string;
  name: string;
  city: string;
  country: string;
  interests: string[];
  profiles: UserProfile[];
  matchPercentage?: number; // Optional field for match percentage
}

interface DiscoverProps {
  userId: string;
}

const Discover: React.FC<DiscoverProps> = ({ userId }) => {
  // const [nearbyUsers, setNearbyUsers] = useState<User[]>([]);
  // const [cityUsers, setCityUsers] = useState<User[]>([]);
  // const [commonInterestUsers, setCommonInterestUsers] = useState<User[]>([]);
  // const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  const { t1, t2, t3, t4 } = images1;
  const carouselItems = [
    {
      image: "/pexels-glauber-torquato-1161877-2219274.jpg",
      alt: "Image 1",
    },
    { image: "/pexels-photo-5876695.jpeg", alt: "Image 2" },
    { image: "/pexels-habib-hosseini-3650331.jpg", alt: "Image 3" },
    { image: "/pexels-photo-5876695.jpeg", alt: "Image 4" },
    { image: "/pexels-vera-arsic-304265-984935.jpg", alt: "Image 5" },
  ];

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     setLoading(true);
  //     try {
  //       const [
  //         nearbyResponse,
  //         cityResponse,
  //         commonInterestResponse,
  //         recommendedResponse,
  //       ] = await Promise.all([
  //         axios.get(`/api/users/nearby?userId=${userId}`),
  //         axios.get(`/api/users/city?userId=${userId}`),
  //         axios.get(`/api/users/common-interests?userId=${userId}`),
  //         axios.get(`/api/users/recommended?userId=${userId}`),
  //       ]);

  //       setNearbyUsers(nearbyResponse.data);
  //       setCityUsers(cityResponse.data);
  //       setCommonInterestUsers(commonInterestResponse.data);
  //       setRecommendedUsers(recommendedResponse.data);
  //     } catch (error) {
  //       setError("Failed to load users");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, [userId]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div className="mt-5">
      <h1 className="text-center text-2xl font-bold mb-8">
        Discover Your Matches
      </h1>

      <div className="mx-auto mb-8">
        <Carousel items={carouselItems} />
      </div>

      {/* Nearby Users */}
      <section className="mb-8 mx-12">
        <h2 className="text-xl font-semibold mb-4">Nearby Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeNearbyUsers.map((user: User) => (
            <div
              key={user.id}
              className="p-4 border border-gray-300 rounded-md"
            >
              <Image
                src={t2 || user.profiles[0]?.profilePictureUrl}
                alt={`${user.name}'s profile`}
                width={500} // Adjust the width as needed
                height={400} // Adjust the height as needed
                className="w-full h-[16rem] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p>
                {user.city}, {user.country}
              </p>
              <div className="flex gap-4 mt-5 justify-between">
                <button className="shadow-lg flex items-center px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
                  <FaHeart className="mr-2" />
                  {"Send Like"}
                </button>
                <button className="shadow-lg flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  <FaEnvelope className="mr-2" />
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* City Users */}
      <section className="mb-8 mx-12">
        <h2 className="text-xl font-semibold mb-4">Users from Your City</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeCityUsers.map((user: User) => (
            <div
              key={user.id}
              className="p-4 border border-gray-300 rounded-md"
            >
              <Image
                src={t3 || user.profiles[0]?.profilePictureUrl}
                alt={`${user.name}'s profile`}
                width={500} // Adjust the width as needed
                height={400} // Adjust the height as needed
                className="w-full h-[16rem] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p>
                {user.city}, {user.country}
              </p>
              <div className="flex gap-4 mt-5 justify-between">
                <button className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
                  <FaHeart className="mr-2" />
                  {"Send Like"}
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  <FaEnvelope className="mr-2" />
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Interests */}
      <section className="mb-8 mx-12">
        <h2 className="text-xl font-semibold mb-4">
          Users with Common Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeCommonInterestUsers.map((user: User) => (
            <div
              key={user.id}
              className="p-4 border border-gray-300 rounded-md"
            >
              <Image
                src={t4 || user.profiles[0]?.profilePictureUrl}
                alt={`${user.name}'s profile`}
                width={500} // Adjust the width as needed
                height={400} // Adjust the height as needed
                className="w-full h-[16rem] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p>
                {user.city}, {user.country}
              </p>
              <div className="flex gap-4 mt-5 justify-between">
                <button className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
                  <FaHeart className="mr-2" />
                  {"Send Like"}
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  <FaEnvelope className="mr-2" />
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Users */}
      <section className="mx-12">
        <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeRecommendedUsers.map((user: User) => (
            <div
              key={user.id}
              className="p-8 border border-gray-300 rounded-md"
            >
              <Image
                src={t1 || user.profiles[0]?.profilePictureUrl}
                alt={`${user.name}'s profile`}
                width={500} // Adjust the width as needed
                height={400} // Adjust the height as needed
                className="w-full h-[16rem] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p>Match: {user.matchPercentage}%</p>
              <p>
                {user.city}, {user.country}
              </p>
              <div className="flex gap-4 mt-5 justify-between">
                <button className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
                  <FaHeart className="mr-2" />
                  {"Send Like"}
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  <FaEnvelope className="mr-2" />
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;
