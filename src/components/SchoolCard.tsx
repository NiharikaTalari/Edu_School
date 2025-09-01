import React from 'react';
import { School } from '@/types/school';
import { MapPin, Phone, Mail, Users, Star } from 'lucide-react';

interface SchoolCardProps {
  school: School;
  onClick?: () => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={school.image} 
          alt={school.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-blue-600">
          {school.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {school.name}
          </h3>
          {school.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700">{school.rating}</span>
            </div>
          )}
        </div>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>{school.address}, {school.city}, {school.state}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-green-500" />
            <span>{school.contact}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-500" />
            <span>{school.email_id}</span>
          </div>
          {school.students && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-orange-500" />
              <span>{school.students} students</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;