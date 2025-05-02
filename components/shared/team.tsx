import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    facebook?: string;
    twitter?: string;
    google?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sharon Santos',
    role: 'SEO Expert',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    bio: 'Pellentesque dignissim urna eu felis. Curabitur pretium tincidunt lacus.',
    social: {
      facebook: '#',
      twitter: '#',
      google: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Helen Stephens',
    role: 'Content Writer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Pellentesque dignissim urna eu felis. Curabitur pretium tincidunt lacus.',
    social: {
      facebook: '#',
      twitter: '#',
      google: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Harold Guerrero',
    role: 'Marketing',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    bio: 'Pellentesque dignissim urna eu felis. Curabitur pretium tincidunt lacus.',
    social: {
      facebook: '#',
      twitter: '#',
      google: '#',
      linkedin: '#',
    },
  },
];

const TeamMembers: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-16 lg:px-32 bg-[url('/assets/images/bg1.jpg')] bg-cover bg-center bg-no-repeat dark:bg-black/80 dark:text-white">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-16">
        Meet Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-60 h-[420px] bg-white shadow-xl rounded-t-[150px] flex flex-col items-center relative overflow-hidden transition hover:shadow-2xl hover:scale-105"
          >
            {/* Top Curved Background */}
            <div className="w-full h-40 dark:bg-gray-700 rounded-t-full relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full border-4 mt-11 border-white shadow-md absolute left-1/2 top-16 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <div className="mt-11 px-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{member.name}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">{member.role}</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mb-4">{member.bio}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-3">
                {member.social.facebook && (
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/facebook-logo.png" alt="Facebook" className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/twitter.png" alt="Twitter" className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                )}
                {member.social.google && (
                  <a href={member.social.google} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/github.png" alt="Google" className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5 hover:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
