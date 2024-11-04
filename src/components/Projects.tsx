import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DotsPattern } from './Patterns';

const projects = [
  {
    title: "TeamSync",
    description: "Build stronger remote teams through engaging virtual experiences. Connect, collaborate, and celebrate together, no matter where you are.",
    image: "https://private-user-images.githubusercontent.com/59682377/380238821-31bf2af0-d804-466d-9fe8-8c28cf1e8e3b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAwMTgxNDIsIm5iZiI6MTczMDAxNzg0MiwicGF0aCI6Ii81OTY4MjM3Ny8zODAyMzg4MjEtMzFiZjJhZjAtZDgwNC00NjZkLTlmZTgtOGMyOGNmMWU4ZTNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDI3VDA4MzA0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcyNzAyZjVjMTA1MWM5MzcyNDA0ODJhZGQyNzBmYmMxYTYwZTExZmE4YmE4YTI4NGJiM2UxMTcxZTIwNzI4NWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.uFFL8NoeKRedukJ2g2DbGmSMB9uHCyYHuul3mHClocw",
    link: "https://silly-eclair-ee8523.netlify.app/",
    status: "Production"
  },
  {
    title: "Portfolio",
    description: "My Personal Portfolio Website",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot%202024-11-04%20at%2013.00.16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA34VAGWNFKVVIULZA%2F20241104%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20241104T101931Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaDGV1LWNlbnRyYWwtMSJHMEUCIQCsbDPjqQrHPA%2Bq3gr6poJp5O236L7ydqhrRlulyoiNHQIgOusoPcSCSX0GeyfMeLxrpafsjdIIPmUxhMdOIke93hQq8QII6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw4MTc0NTM1MTE0OTgiDFdqxdKkm%2Fqa3q4nDirFAmWwwi7bOd2kZl2n6ugwzHlYgtRtIr1ru6HLi9VMHgPVEnFboKu4hf%2FwThNpnTrS2R8inAmrW3tDQCDRmh3l8x0fe9jMwBbmVjll2XqH96qHHiK8dNP8aIyl5viu%2F%2BByrvW3KCyRLLYVU7a39p9Ek8c7xNIdr2F1vr95RWt5aaKGPWJHzTinKUpiYdtbZ1H4%2FThNptfiVMktjTUheVwCDDI7Uc7Wk0%2Bc9Yoqyx3FejqVoJRnBVa%2F1UIIL9ZIPqnhwbsk62i3L5Mp4utddt20eQOWeGKozAx18ZQth6J4sHjGbNpuiGEqfZbEdm350kFkmz15whaThp6wET%2BckZY9LD5k%2B%2BYKs9bRosM0Ovc%2FmfHRdlfmGsbxv1J%2Fa5QezY6N3fZP8eg0%2FpKabU3RPml5tmTS6mc2YvSYDCKeD%2BtXWTCpN2e5qu0w0bKiuQY6swKiFUyyDGu2CD02p2m5bR6AurBEMuapPqDAYmxulD3fOI4GKudgyHe27vHGY4Ph5TgssufuhH%2FZvhVA17vUOiRr7aWw6WT%2FXVDQqGN%2BvHlwqYIxByqtMs4vPu1sVMHgfPa2OIeZpFOfU7fC2S%2BjxL1H5U%2BjwhKsRE7%2BijT3SCecK829bQKHuKlS1%2BPHKUsQeUxwINSglpBRfY7CDS99tuf0DizQf3%2F4maLjcdh%2FTbrM6Gt1VG31wLj7wfq6NjwFYjG79StMqO7aTEJWJ6UZR8g%2FBxtst3VTwQojplY8Ar5P92T5NmUXfH0L5YWC2D8IhoZM3e3qfr3idoOjcOOnfOdxMTcCBn0Dl1Dj0wlPEzALpN1o71I%2BA4UjTNH37dSbO8yQ30C%2B4s7xpaG3ZLW9LBqQUQOG&X-Amz-Signature=bab99b77125666c5359553be1d27b3e38b5c0cfe793766f4794ce17848086bc0&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    link: "https://isaactonyloiportfolio.netlify.app/",
    status: "Production"
  },
  {
    title: "Upwork",
    description: "An Upwork platform clone using Typescript, React and Tailwind CSS",
    image: "https://private-user-images.githubusercontent.com/59682377/380039102-15b5b110-fec1-4b83-901f-74b19427ee95.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAwMTg1ODMsIm5iZiI6MTczMDAxODI4MywicGF0aCI6Ii81OTY4MjM3Ny8zODAwMzkxMDItMTViNWIxMTAtZmVjMS00YjgzLTkwMWYtNzRiMTk0MjdlZTk1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDI3VDA4MzgwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzZmYwYzJhMWNmYzA3NTNhMjcyY2E3ODE0MzE5NmIxNzVlMTk3ZWRjMDkzZGMyZjc1OTUyYTcwNWE3Mjk3NzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RF6j3gw9qy0sTDPMqKPr4T5vwmSPnFE1gJY-9zMoIUo",
    link: "https://snazzy-hummingbird-1b200b.netlify.app/",
    status: "Production"
  },
  {
    title: "Data Pipeline Framework",
    description: "Scalable ETL pipeline processing 10TB+ daily data",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    status: "Production"
  },
  {
    title: "Technical Documentation Portal",
    description: "Comprehensive system documentation and API reference",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    status: "Live"
  },
  {
    title: "Microservices Platform",
    description: "Cloud-native backend system handling 1M+ requests/day",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    status: "Production"
  }
];

export default function Projects() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <DotsPattern />
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-4">My Recent Work</h2>
        <p className="section-subtitle mb-16">
          Here are a few past projects I've worked on. Want to see more?{' '}
          <a href="#contact" className="text-violet-600 hover:text-violet-700">Email me</a>.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block bg-white rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-violet-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white w-8 h-8" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-violet-600">{project.status}</span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}