// /app/components/ProfileForm.tsx
import { useState } from "react";
import axios from "axios";

const ProfileForm = ({ user, onSave }: { user: any; onSave: () => void }) => {
  const [bio, setBio] = useState(user.profile.bio);
  const [profilePictureUrl, setProfilePictureUrl] = useState(
    user.profile.profilePictureUrl
  );
  const [images, setImages] = useState(user.profile.images.join(", "));

  const handleSave = async () => {
    const updatedProfile = {
      id: user.id,
      bio,
      profilePictureUrl,
      images: images.split(",").map((image: string) => image.trim()),
    };

    await axios.put("/api/profile", updatedProfile);
    onSave();
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Edit Profile</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Profile Picture URL
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={profilePictureUrl}
          onChange={(e) => setProfilePictureUrl(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Images (comma-separated URLs)
        </label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={images}
          onChange={(e) => setImages(e.target.value)}
        />
      </div>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default ProfileForm;
