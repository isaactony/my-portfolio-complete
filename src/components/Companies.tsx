import React from 'react';

const companies = [
  {
    name: "McCain Foods",
    logo: "https://www.mccain.com/images/logo-mccain.png",
  },
  {
    name: "Energy Robotics",
    logo: "https://cdn.prod.website-files.com/659a7d409917def0560ba6c4/659aadf3dfa99d9cee109f57_er-logo-white.svg",
  },
  {
    name: "Solaris Offgrid",
    logo: "https://static.wixstatic.com/media/6cfc4d_21f2052dc6574e438b2a9c8ec8f80add~mv2.png/v1/fill/w_136,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Solaris_Offgrid_Blu_IsoLogo_P_2019.png",
  },
  {
    name: "ARWALL",
    logo: "https://arwall.co/cdn/shop/files/arwall_logo_2Kalpha_lightBG_1.png?v=1719410092",
  },
  {
    name: "Sendent",
    logo: "https://sendent.com/wp-content/uploads/2021/10/sendent_logo.png",
  },
  {
    name: "Technical Writer HQ",
    logo: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://technicalwriterhq.com/wp-content/uploads/2022/08/TechnicalWriterHQ-logo.jpg",
  },
  {
    name: "Digma",
    logo: "https://digma.ai/wp-content/uploads/2024/02/logo-alt-1.svg",
  },
  {
    name: "10Web",
    logo: "https://10web.io/wp-content/themes/10web-theme/images/logos/logo.svg",
  }

];

export default function Companies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-4">Companies I've Worked With</h2>
        <p className="section-subtitle mb-16">
          I'm proud to have collaborated with some amazing companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}