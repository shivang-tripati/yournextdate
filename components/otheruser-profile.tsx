"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaHeart, FaEnvelope } from "react-icons/fa";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const OtherUserProfile = () => {
  const { userId, otherUserId } = useParams();
  const { data: user, error } = useSWR(
    userId ? `/api/profile/${otherUserId}` : null,
    fetcher
  );
  const { data: loggedInUser } = useSWR(
    userId ? `/api/profile/${userId}` : null,
    fetcher
  );
  const [hasLiked, setHasLiked] = useState(false);

  if (error) return <div className="text-red-500">Failed to load</div>;
  if (!user || !loggedInUser) return <div>Loading...</div>;

  const handleLikeClick = async () => {
    await axios.post(`/api/likes`, {
      senderId: userId,
      receiverId: otherUserId,
    });
    setHasLiked(true);
  };

  const handleMessageClick = () => {
    // Logic to open messaging interface
  };

  const matchPercentage = calculateMatchPercentage(
    loggedInUser.responses,
    user.responses
  );

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex items-start justify-between mt-10 mb-10 ">
        <div className="gap-y-2 justify-center">
          <Image
            src={user.profile.profilePictureUrl}
            alt={`${user.name}'s profile`}
            width={300}
            height={300}
            className="rounded-full border-4 border-pink-500 shadow-lg"
          />

          <div className="flex gap-4 mt-5 justify-center">
            <button
              className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
              onClick={handleLikeClick}
              disabled={hasLiked}
            >
              <FaHeart className="mr-2" />
              {hasLiked ? "Liked" : "Send Like"}
            </button>
            <button
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              onClick={handleMessageClick}
            >
              <FaEnvelope className="mr-2" />
              Message
            </button>
          </div>
        </div>
        <div className="ml-6 flex-1">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">{user.name}</h1>
          <h3 className="text-lg font-medium">Bio</h3>
          <p className="text-gray-700 mb-2">{user.profile.bio}</p>
          <div className="flex flex-col space-y-1 mb-4">
            <p className="text-gray-700 text-lg font-medium">
              <span className="font-semibold">Age:</span>{" "}
              {new Date().getFullYear() -
                new Date(user.dateOfBirth).getFullYear()}
            </p>
            <p className="text-gray-700 text-lg font-medium">
              <span className="font-semibold">Gender:</span> {user.gender}
            </p>
            <p className="text-gray-700 text-lg font-medium">
              <span className="font-semibold">Location:</span> {user.city},{" "}
              {user.country}
            </p>
            <p className="text-gray-700 text-lg font-medium">
              <span className="font-semibold">Match Percentage:</span>{" "}
              {matchPercentage}%
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-pink-600 mt-8">Responses</h2>
      <ul className="mt-4 space-y-2">
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
      <h2 className="text-3xl font-bold text-pink-600 mt-8">Images</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {user.profile.images.map((imageUrl: string, index: number) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
            className="rounded-md border-2 border-pink-300 shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

const calculateMatchPercentage = (
  loggedInUserResponses: any[],
  otherUserResponses: any[]
) => {
  let matches = 0;
  loggedInUserResponses.forEach((loggedInResponse) => {
    otherUserResponses.forEach((otherResponse) => {
      if (loggedInResponse.optionId === otherResponse.optionId) {
        matches += 1;
      }
    });
  });
  return ((matches / loggedInUserResponses.length) * 100).toFixed(2);
};

export default OtherUserProfile;
