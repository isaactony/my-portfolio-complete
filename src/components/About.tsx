import React from 'react';

export default function About() {
  return (
    <div className="relative pb-32">
      <div className="bg-violet-600 h-[500px] w-full absolute top-0 left-0"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center text-white pt-24 pb-16">
          <h2 className="text-4xl font-bold mb-6">Hi, I'm Isaac. Nice to meet you.</h2>
          <p className="text-lg text-violet-100 max-w-3xl mx-auto">
            Since beginning my journey as a backend developer over a decade ago, I've worked with talented teams
            to create robust systems, clear documentation, and efficient data solutions. I'm quietly confident,
            naturally curious, and perpetually improving my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Backend Developer</h3>
            <p className="text-gray-600 mb-8">
              I value clean architecture, efficient code, and scalable solutions.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-violet-600 font-medium mb-3">Languages I speak:</h4>
                <p className="text-gray-600">Python, Node.js, Java, SQL</p>
              </div>

              <div>
                <h4 className="text-violet-600 font-medium mb-3">Dev Tools:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>AWS</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Big Data Expert</h3>
            <p className="text-gray-600 mb-8">
              I enjoy tackling complex data challenges and building efficient pipelines.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-violet-600 font-medium mb-3">Technologies:</h4>
                <p className="text-gray-600">Apache Spark, Hadoop, Kafka</p>
              </div>

              <div>
                <h4 className="text-violet-600 font-medium mb-3">Expertise:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>ETL Pipeline Design</li>
                  <li>Real-time Processing</li>
                  <li>Data Warehousing</li>
                  <li>Stream Processing</li>
                  <li>Data Modeling</li>
                  <li>Analytics Systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Technical Writer</h3>
            <p className="text-gray-600 mb-8">
              I create clear documentation that bridges complex systems and understanding.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-violet-600 font-medium mb-3">What I write:</h4>
                <p className="text-gray-600">API Docs, Architecture Guides, Tutorials</p>
              </div>

              <div>
                <h4 className="text-violet-600 font-medium mb-3">Writing Stats:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>500+ Technical Articles</li>
                  <li>50+ System Docs</li>
                  <li>20+ White Papers</li>
                  <li>10+ Case Studies</li>
                  <li>5+ Books</li>
                  <li>1000+ Code Examples</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}