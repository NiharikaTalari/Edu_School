import React, { useState, useMemo } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { mockSchools } from '@/data/schools';
import { SchoolFormData, School } from '@/types/school';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import SearchBar from './SearchBar';
import SchoolGrid from './SchoolGrid';
import AddSchoolForm from './AddSchoolForm';
import StatsSection from './StatsSection';
import Footer from './Footer';
import { X } from 'lucide-react';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  
  const [schools, setSchools] = useState<School[]>(mockSchools);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           school.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = !filterBy || school.type === filterBy;
      
      return matchesSearch && matchesFilter;
    });
  }, [schools, searchTerm, filterBy]);

  const handleAddSchool = (formData: SchoolFormData) => {
    const newSchool: School = {
      id: schools.length + 1,
      ...formData,
      image: formData.image as string || "https://d64gsuwffb70l.cloudfront.net/68b464a0425cadda193ae2e7_1756652755250_d91d6875.webp",
      type: 'Elementary',
      rating: 4.5,
      students: Math.floor(Math.random() * 1000) + 200
    };
    
    setSchools(prev => [...prev, newSchool]);
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation onAddSchool={() => setShowAddForm(true)} />
      
      {/* Hero Section */}
      <HeroSection onAddSchool={() => setShowAddForm(true)} />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Main Content */}
      <div id="schools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">School Directory</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive database of educational institutions
          </p>
        </div>
        
        {/* Search and Filter */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterBy={filterBy}
          onFilterChange={setFilterBy}
        />
        
        {/* School Grid */}
        <SchoolGrid schools={filteredSchools} title="Available Schools" />
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Add School Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <AddSchoolForm
              onSubmit={handleAddSchool}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;