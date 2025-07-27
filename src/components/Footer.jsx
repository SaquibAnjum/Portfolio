import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Md Saquib Anjum Khan</h3>
            <p className="text-gray-400">B.Tech in CSE</p>
            <p className="text-gray-400">Creating digital experiences that matter</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">My Work</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>saquib1312@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <span>9572333075</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Bihar, India</span>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-700">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/md-saquib-anjum-khan-414510254/" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/SaquibAnjum" className="text-gray-400 hover:text-white transition-colors text-xl">
                <FaGithub />
              </a>
              <a href="https://leetcode.com/u/saquib-anjum-khan/" className="text-gray-400 hover:text-white transition-colors text-xl">
                <SiLeetcode />
              </a>
            </div>
            
            {/* <h4 className="text-lg font-semibold text-white mt-6 mb-4 pb-2 border-b border-gray-700">Newsletter</h4> */}
            <div className="flex">
              {/* <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              /> */}
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors">
                Join
              </button> */}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} Md Saquib Anjum Khan. All rights reserved.</p>
          <p className="mt-1">Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;