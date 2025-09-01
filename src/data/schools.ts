import { School } from '@/types/school';
import { extendedSchools } from './extendedSchools';

export const mockSchools: School[] = [
  {
    id: 1,
    name: "Riverside Elementary School",
    address: "123 Oak Street",
    city: "Springfield",
    state: "CA",
    contact: "(555) 123-4567",
    email_id: "info@riverside-elem.edu",
    image: "https://d64gsuwffb70l.cloudfront.net/68b464a0425cadda193ae2e7_1756652755250_d91d6875.webp",
    type: "Elementary",
    rating: 4.8,
    students: 450
  },
  {
    id: 2,
    name: "Lincoln High School",
    address: "456 Maple Avenue",
    city: "Madison",
    state: "WI",
    contact: "(555) 234-5678",
    email_id: "admissions@lincoln-high.edu",
    image: "https://d64gsuwffb70l.cloudfront.net/68b464a0425cadda193ae2e7_1756652768974_37a34cd7.webp",
    type: "High School",
    rating: 4.6,
    students: 1200
  },
  {
    id: 3,
    name: "St. Mary's Academy",
    address: "789 Pine Road",
    city: "Boston",
    state: "MA",
    contact: "(555) 345-6789",
    email_id: "contact@stmarys-academy.edu",
    image: "https://d64gsuwffb70l.cloudfront.net/68b464a0425cadda193ae2e7_1756652781590_4ba621ec.webp",
    type: "Private Academy",
    rating: 4.9,
    students: 320
  },
  ...extendedSchools
];