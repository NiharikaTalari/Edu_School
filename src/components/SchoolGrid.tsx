import React from 'react';
import { School } from '@/types/school';
import SchoolCard from './SchoolCard';
import { BookOpen } from 'lucide-react';

interface SchoolGridProps {
  schools: School[];
  title?: string;
}

const SchoolGrid: React.FC<SchoolGridProps> = ({ schools, title = "Featured Schools" }) => {
  if (schools.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Schools Found</h3>
        <p className="text-gray-600">Try adjusting your search criteria or add a new school.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          {schools.length} {schools.length === 1 ? 'school' : 'schools'} found
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((school) => (
          <SchoolCard 
            key={school.id} 
            school={school}
            onClick={() => console.log('View school details:', school.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolGrid;