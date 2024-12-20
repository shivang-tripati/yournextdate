"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useAuthStore from "@/hooks/user-auth-store";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Likes = () => {
  const [likesSent, setLikesSent] = useState<any[]>([]);
  const [likesReceived, setLikesReceived] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [refresh, setRefresh] = useState(false); // Track likes changes

  const { user } = useAuthStore();
  const router = useRouter();

  const userId = user?.id;

  // Fetch likes data
  const fetchLikes = useCallback(async () => {
    if (!userId) return;

    try {
      const response = await axios.get("/api/likes", {
        headers: { "user-id": userId },
      });
      const { likesSent, likesReceived } = response.data;

      // Remove duplicates from likesSent and likesReceived
      const uniqueLikesSent = Array.from(
        new Map(likesSent.map((item: any) => [item.receiverId, item])).values()
      );
      const uniqueLikesReceived = Array.from(
        new Map(
          likesReceived.map((item: any) => [item.senderId, item])
        ).values()
      );

      setLikesSent(uniqueLikesSent);
      setLikesReceived(uniqueLikesReceived);
    } catch (error) {
      setError("Failed to load likes");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchLikes();
  }, [fetchLikes]);

  // Handle view profile click
  const handleViewProfileClick = async (receiverId: string) => {
    try {
      const response = await axios.get(`/api/users/${receiverId}`);
      setSelectedUser(response.data);
    } catch (error) {
      setError("Error fetching user profile");
    }
  };

  // Send like and refresh the list
  const sendLike = async (receiverId: string) => {
    try {
      await axios.post("/api/likes", { senderId: userId, receiverId });
      setRefresh(!refresh); // Trigger re-fetch
    } catch (error) {
      setError("Error sending like");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto flex flex-col md:flex-row">
      {/* Likes List Section */}
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-2xl mb-4">Likes Received</h2>
        <ul className="space-y-4">
          {likesReceived.length === 0 ? (
            <p>No likes received yet.</p>
          ) : (
            likesReceived.map((like: any) => (
              <li
                key={like.senderId}
                className="p-4 border border-gray-300 rounded-md flex items-center"
              >
                <Image
                  src={like.sender.profilePictureUrl}
                  alt={`${like.sender.name}'s profile`}
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{like.sender.name}</h3>
                  <button
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
                    onClick={() =>
                      router.push(`/profile/${userId}/${like.senderId}`)
                    }
                  >
                    View Profile
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>

        <h2 className="text-2xl mt-8 mb-4">Likes Sent</h2>
        <ul className="space-y-4">
          {likesSent.length === 0 ? (
            <p>No likes sent yet.</p>
          ) : (
            likesSent.map((like: any) => (
              <li
                key={like.receiverId}
                className="p-4 border border-gray-300 rounded-md flex items-center"
              >
                <Image
                  src={like.receiver.profilePictureUrl}
                  alt={`${like.receiver.name}'s profile`}
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">
                    {like.receiver.name}
                  </h3>
                  <button
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
                    onClick={() =>
                      router.push(`/profile/${userId}/${like.receiverId}`)
                    }
                  >
                    View Profile
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Likes;
