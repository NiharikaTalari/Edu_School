import React, { useState } from 'react';
import { GraduationCap, Menu, X, Plus, Search, Home } from 'lucide-react';

interface NavigationProps {
  onAddSchool: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onAddSchool }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">EduConnect</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
              Home
            </a>
            <a href="#schools" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Search className="w-4 h-4" />
              Browse Schools
            </a>
            <button
              onClick={onAddSchool}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add School
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="#schools" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Search className="w-4 h-4" />
                Browse Schools
              </a>
              <button
                onClick={() => {
                  onAddSchool();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add School
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;