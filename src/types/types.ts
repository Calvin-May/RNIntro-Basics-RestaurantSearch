type YelpResult = {
  alias: string;
  category: [];
  coordinates: { latitude: number; longitude: number };
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: {
    address1: string;
    address2?: string;
    address3?: string;
    city: string;
    country: string;
    display_address: [];
    state: string;
    zip_code: string;
  };
  name: string;
  photos: [];
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  transactions: [];
  url: string;
};

// Sample Data Structure returned by th API
// const data = {
//   alias: 'what-a-bagel-ajax-2',
//   categories: [
//     { alias: 'bagels', title: 'Bagels' },
//     { alias: 'breakfast_brunch', title: 'Breakfast & Brunch' },
//     { alias: 'bakeries', title: 'Bakeries' },
//   ],
//   coordinates: { latitude: 43.8787194011473, longitude: -79.0247792264587 },
//   display_phone: '+1 905-426-4426',
//   hours: [{ hours_type: 'REGULAR', is_open_now: true, open: [Array] }],
//   id: 'Y_TXOBZxfUjPYoQuEF2aAA',
//   image_url:
//     'https://s3-media1.fl.yelpcdn.com/bphoto/Bopig-862GNLts_TmZxYyQ/o.jpg',
//   is_claimed: true,
//   is_closed: false,
//   location: {
//     address1: '1 Rossland Road E',
//     address2: 'Unit F1.4',
//     address3: '',
//     city: 'Ajax',
//     country: 'CA',
//     cross_streets: '',
//     display_address: [
//       '1 Rossland Road E',
//       'Unit F1.4',
//       'Ajax, ON L1Z 0T4',
//       'Canada',
//     ],
//     state: 'ON',
//     zip_code: 'L1Z 0T4',
//   },
//   messaging: {
//     url: 'https://www.yelp.com/raq/Y_TXOBZxfUjPYoQuEF2aAA?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=W1dNi6Ziy5O0z-dk2LOQow#popup%3Araq',
//     use_case_text: 'Message the Business',
//   },
//   name: 'What A Bagel',
//   phone: '+19054264426',
//   photos: [
//     'https://s3-media1.fl.yelpcdn.com/bphoto/Bopig-862GNLts_TmZxYyQ/o.jpg',
//     'https://s3-media1.fl.yelpcdn.com/bphoto/hBicJPwD9-yuZbo6u4znVg/o.jpg',
//     'https://s3-media2.fl.yelpcdn.com/bphoto/NUU_9aIPudsApsgZbOt-IQ/o.jpg',
//   ],
//   price: '$',
//   rating: 4.5,
//   review_count: 38,
//   transactions: [],
//   url: 'https://www.yelp.com/biz/what-a-bagel-ajax-2?adjust_creative=W1dNi6Ziy5O0z-dk2LOQow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=W1dNi6Ziy5O0z-dk2LOQow',
// };

export { YelpResult };
