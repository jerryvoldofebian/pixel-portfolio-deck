
import { ArrowRight, Code, Database, Globe, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const technologies = {
    backend: [
      { name: "Nginx", icon: "🌐" },
      { name: "Golang", icon: "🔧" },
      { name: "PHP", icon: "🐘" },
      { name: "Gin", icon: "🍸" },
      { name: "CodeIgniter 3", icon: "🔥" },
      { name: "CodeIgniter 4", icon: "🚀" },
    ],
    frontend: [
      { name: "HTML", icon: "📝" },
      { name: "ReactJS", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Shadcn", icon: "✨" },
    ],
    database: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "PocketBase", icon: "📦" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "#", color: "hover:text-gray-800" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, url: "mailto:hello@example.com", color: "hover:text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Web Developer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Freelancer
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              Transformasi ide digital Anda menjadi kenyataan dengan solusi web yang inovatif dan berkualitas tinggi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                Lihat Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Hubungi Saya
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Saya</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  WD
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Passionate Full-Stack Developer
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Saya adalah freelancer pengembang web dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web yang scalable dan user-friendly. Spesialisasi saya mencakup development full-stack dengan fokus pada performa dan user experience yang optimal.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dengan keahlian di berbagai teknologi modern, saya siap membantu mewujudkan visi digital Anda dari konsep hingga deployment. Setiap project saya tangani dengan dedikasi tinggi dan standar kualitas profesional.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">5+ Years Experience</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">50+ Projects</span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">100% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Teknologi & Keahlian</h2>
              <p className="text-xl text-gray-600">Stack teknologi modern untuk solusi web terdepan</p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Backend */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mr-4">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Backend</h3>
                  </div>
                  <div className="space-y-3">
                    {technologies.backend.map((tech, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-2xl mr-3">{tech.icon}</span>
                        <span className="font-medium text-gray-800">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Frontend */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg mr-4">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Frontend</h3>
                  </div>
                  <div className="space-y-3">
                    {technologies.frontend.map((tech, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-2xl mr-3">{tech.icon}</span>
                        <span className="font-medium text-gray-800">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Database */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-4">
                      <Database className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Database</h3>
                  </div>
                  <div className="space-y-3">
                    {technologies.database.map((tech, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-2xl mr-3">{tech.icon}</span>
                        <span className="font-medium text-gray-800">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Mewujudkan Project Impian Anda?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Mari berkolaborasi untuk menciptakan solusi web yang powerful dan scalable untuk bisnis Anda. 
              Dari konsep hingga launch, saya siap mendampingi perjalanan digital Anda.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-12 py-4">
              Mulai Project Anda
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media & Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Mari Terhubung</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Jangan ragu untuk menghubungi saya melalui platform favorit Anda
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`p-4 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 ${social.color} hover:bg-gray-700`}
                  aria-label={social.name}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-gray-300">+62 812-3456-7890</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">hello@webdev.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="font-semibold mb-2">Lokasi</h3>
                <p className="text-gray-300">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Web Developer Freelancer
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Passionate freelancer yang berdedikasi untuk menciptakan pengalaman web yang luar biasa. 
                Dengan teknologi terdepan dan pendekatan user-centric, setiap project dikerjakan dengan standar kualitas tinggi.
              </p>
              <div className="flex space-x-4">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Database Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Web Developer Freelancer. All rights reserved. Built with ❤️ using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
