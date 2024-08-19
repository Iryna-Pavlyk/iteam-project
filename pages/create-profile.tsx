import { useRouter } from 'next/router';
import { useState } from 'react';

interface Profile {
  name: string;
  position: string;
  about: string;
}

const createProfilePage = () => {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    position: '',
    about: '',
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    router.push('jobs');
  };

  return (
    <div>
      <h1>Create profile</h1>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="position"
        value={profile.position}
        onChange={handleChange}
        placeholder="Desired position"
      />
      <textarea
        name="about"
        value={profile.about}
        onChange={handleChange}
        placeholder="About me"
      ></textarea>
      <button onClick={handleSubmit}>Save profile</button>
    </div>
  );
};

export default createProfilePage;
