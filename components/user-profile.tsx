"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import ProfileForm from "@/components/ui/profile-form";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const UserProfile = () => {
  const { userId } = useParams();
  const {
    data: user,
    error,
    mutate,
  } = useSWR(userId ? `/api/profile/${userId}` : null, fetcher);
  const [isEditing, setIsEditing] = useState(false);

  if (error) return <div className="text-red-500">Failed to load</div>;
  if (!user) return <div>Loading...</div>;

  const handleEditClick = () => setIsEditing(!isEditing);

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex items-start justify-between mt-10 mb-10">
        <div className="flex-shrink-0 w-40 h-40 relative">
          <Image
            src={user.profile.profilePictureUrl}
            alt={`${user.name}'s profile`}
            width={160}
            height={160}
            className="rounded-full border-4 border-pink-500 shadow-lg object-cover"
          />
        </div>
        <div className="ml-6 flex-1">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">{user.name}</h1>
          <div className="flex flex-col space-y-2 mb-4">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Bio:</span> {user.profile.bio}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Age:</span>{" "}
              {new Date().getFullYear() -
                new Date(user.dateOfBirth).getFullYear()}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Gender:</span> {user.gender}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Location:</span> {user.city},{" "}
              {user.country}
            </p>
          </div>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 transition"
            onClick={handleEditClick}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>
      {isEditing && (
        <ProfileForm
          user={user}
          onSave={() => {
            mutate();
            setIsEditing(false);
          }}
        />
      )}
      <h2 className="text-3xl font-bold text-pink-600 mt-8 mb-4 border-b border-gray-300 pb-2">
        Responses
      </h2>
      <ul className="space-y-4">
        {user.responses.map((response: any) => (
          <li
            key={response.id}
            className="p-4 border border-pink-300 rounded-md bg-pink-50 shadow-md"
          >
            <p className="font-semibold text-pink-700">
              {response.option.question.text}
            </p>
            <p className="text-gray-700">{response.option.text}</p>
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold text-pink-600 mt-8 mb-4 border-b border-gray-300 pb-2">
        Images
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {user.profile.images.map((imageUrl: string, index: number) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-md border border-pink-300 shadow-md"
          >
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
