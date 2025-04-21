import { useEffect, useState } from 'react';
import yelp from '@/api/yelp';

import { YelpResult } from '@/types/types';

export default () => {
  const [APIResults, setAPIResults] = useState(<YelpResult[]>[]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchAPI = async (searchTerm: string = 'Food') => {
    console.log('gotHere');
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          locale: 'en_CA',
          location: 'Ajax Ontario',
          sort_by: 'best_match',
          limit: '50',
        },
      });
      setAPIResults(response.data.businesses);
      console.log(APIResults);
    } catch (err) {
      setErrorMessage('Oops. Something went wrong.');
    }
  };

  useEffect(() => {
    searchAPI();
  }, []);

  return [searchAPI, APIResults, errorMessage] as const;
};
