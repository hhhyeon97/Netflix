import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcoming = () => {
  return api.get('/movie/upcoming');
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-upcoming'],
    queryFn: fetchUpcoming,
    select: (result) => result.data,
  });
};
