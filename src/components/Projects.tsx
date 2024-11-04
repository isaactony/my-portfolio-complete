import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DotsPattern } from './Patterns';

const projects = [
  
  {
    title: "EcoTrack",
    description: "Track supplier compliance to enviromentally friendly practices",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.21.27.png",
    link: "https://ecotrackyoursuppliers.netlify.app/",
    status: "Production"
  },
  {
    title: "Job Queue Microservice",
    description: "Users can register and login through auth service by user role (ADMIN or USER) through api gateway,  User can send any request to relevant service through api gateway with its bearer token ",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.57.22.png",
    link: "https://github.com/isaactony/job-queue-system",
    status: "Production"
  },
  {
    title: "Sendent",
    description: "Knowledgebase Platform for Sendent Plugin for Outlook, Teams ",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.57.22.png",
    link: "https://help.sendent.com/sendent-app-for-nextcloud-outlook-ms-teams",
    status: "Production"
  },
  {
    title: "TeamSync",
    description: "Build stronger remote teams through engaging virtual experiences. Connect, collaborate, and celebrate together, no matter where you are.",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.33.42.png",
    link: "https://silly-eclair-ee8523.netlify.app/",
    status: "Production"
  },
  {
    title: "Portfolio",
    description: "My Personal Portfolio Website",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.00.16.png",
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
    target="_blank" // Add this line to open the link in a new tab
    rel="noopener noreferrer" // Add this line for security
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