import React from "react";

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
    name: " Gourav Singh",
    role: "Full Stack Developer",
    image: "/assets/images/gourav_singh.jpg",
    bio: "Experienced in building scalable web applications with expertise in both front-end and back-end technologies.",
    social: {
      facebook: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
  {
    name: "Karan Gilhotra",
    role: "FrontEnd Developer",
    image: "/assets/images/Karan_Gilhotra.jpg",
    bio: "Specializes in crafting responsive and user-friendly interfaces using modern front-end frameworks.",
    social: {
      facebook: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
    },
  },
  {
    name: "Hari Mohan Sharma",
    role: "BackEnd Developer",
    image: "/assets/images/Hari_Mohan_Sharma.jpg",
    bio: "Expert in server-side development, database management, and API integrations for seamless functionality.",
    social: {
      facebook: "#",
      twitter: "#",
      google: "#",
      linkedin: "#",
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
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mb-4">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mt-3">
                {member.social.facebook && (
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/icons/facebook-logo.png"
                      alt="Facebook"
                      className="w-5 h-5 hover:scale-110 transition-transform"
                    />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/icons/twitter.png"
                      alt="Twitter"
                      className="w-5 h-5 hover:scale-110 transition-transform"
                    />
                  </a>
                )}
                {member.social.google && (
                  <a
                    href={member.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/icons/github.png"
                      alt="Google"
                      className="w-5 h-5 hover:scale-110 transition-transform"
                    />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/icons/linkedin.png"
                      alt="LinkedIn"
                      className="w-5 h-5 hover:scale-110 transition-transform"
                    />
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
