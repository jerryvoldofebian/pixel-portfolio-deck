import { ArrowRight, Code, Database, Globe, Github, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink, Calendar, User, Briefcase } from "lucide-react";
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

  const projects = [
    {
      id: 1,
      title: "Aplikasi Manajemen Konsultasi Tatap Muka",
      description: "Aplikasi ini digunakan dalam menerima permintaan konsultasi tatap muka oleh pelaku usaha dan sekaligus untuk mencatat hasil konsultasinya yang dapat diakses setiap saat. Didesain untuk tiga roles yaitu admin, konsultan dan klien. Setiap role dapat melakukan login dan mempunyai dashboard masing-masing",
      status: "Completed",
      tech: ["ReactJS", "Golang", "PostgreSQL"],
      image: "https://photos.app.goo.gl/RdCrXtng8L1rXQYz6",
      completion: 100
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking.",
      status: "In Progress", 
      tech: ["ReactJS", "PHP", "CodeIgniter 4"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      completion: 75
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Website perusahaan dengan CMS custom dan optimasi SEO untuk meningkatkan visibility online.",
      status: "Completed",
      tech: ["HTML", "Tailwind CSS", "PocketBase"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      completion: 100
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "Platform properti dengan fitur pencarian advanced, virtual tour, dan sistem booking online.",
      status: "Planning",
      tech: ["ReactJS", "Golang", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      completion: 20
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/jerryvoldo", color: "hover:text-gray-800" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/jerryvoldo", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/jerryvoldo", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, url: "mailto:jerry@jerryvoldo.dev", color: "hover:text-red-500" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:jerry@jerryvoldo.dev" className="hover:text-blue-600">jerry@jerryvoldo.dev</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+6281234567890" className="hover:text-blue-600">+62 812-3456-7890</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 h-4 w-4" />
                Konsultasi Gratis
              </Button>
              <Button size="sm" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <User className="h-4 w-4" />
                Available for Freelance Projects
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Jerry Voldo
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Web Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
              Membangun solusi web inovatif dan berkualitas tinggi untuk bisnis digital Anda. 
              Dari konsep hingga deployment, saya siap mewujudkan visi digital terbaik Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                <Briefcase className="mr-2 h-5 w-5" />
                Lihat Portfolio
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Hubungi Saya
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Jerry</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Developer workspace"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Currently Available</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-gray-900">
                  Passionate Full-Stack Developer
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Halo! Saya Jerry Voldo, seorang freelancer pengembang web dengan pengalaman 2 tahun 
                  dalam membangun aplikasi web yang scalable dan user-friendly. Saya berspesialisasi dalam 
                  development full-stack dengan fokus pada performa optimal dan user experience yang luar biasa.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dengan keahlian di berbagai teknologi modern, saya siap membantu mewujudkan visi digital Anda 
                  dari konsep hingga deployment. Setiap project saya tangani dengan dedikasi tinggi dan standar 
                  kualitas profesional.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2</div>
                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">4</div>
                    <div className="text-sm text-gray-600">Proyek Selesai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Project</h2>
              <p className="text-xl text-gray-600">Beberapa project yang telah dan sedang saya kerjakan</p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-[1.02] overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {project.completion}% Complete
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                      <Button size="sm" variant="ghost" className="ml-4 p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Mewujudkan Project Impian Anda?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Mari berkolaborasi untuk menciptakan solusi web yang powerful dan scalable untuk bisnis Anda. 
              Dari konsep hingga launch, saya siap mendampingi perjalanan digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-12 py-4">
                <Calendar className="mr-2 h-5 w-5" />
                Jadwalkan Konsultasi
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-12 py-4">
                Lihat Project Lainnya
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Media */}
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
                <p className="text-gray-300">jerry@jerryvoldo.dev</p>
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
                Jerry Voldo
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
              © 2024 Jerry Voldo. All rights reserved. Built with ❤️ using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
