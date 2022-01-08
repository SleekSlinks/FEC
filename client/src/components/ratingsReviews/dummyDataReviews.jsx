// import React from 'react';

// const dummyDataReviews = {
//   product: '40344',
//   page: 0,
//   count: 50,
//   results: [
//     {
//       review_id: 1094787,
//       rating: 5,
//       summary: ' Great for sous vide (disregard reviews by those who didn\'t read the product desription)',
//       recommend: true,
//       response: null,
//       body: 'We\'ve been very happy with their pressure cookers (4, 6 and 8 qt) and wanted a good multi-cooker to cover our slow-cooking needs. This offered sous vide which neither the All-Clad nor the Cuisinart had. We\'ve got two sous vide immersion devices which work great but aren\'t good for long, 24-hour (or more) jobs because of evaporation (you have to cover the pot with foil). Made some over-the-top ribs and there was no drop in the water level during the entire 24-hour period. Highly recommend!',
//       date: '2021-11-12T00:00:00.000Z',
//       reviewer_name: 'donot report this review',
//       helpfulness: 7,
//       photos: [
//         {
//           id: 2100456,
//           url: 'https://picsum.photos/200',
//         },
//         {
//           id: 2100458,
//           url: 'https://picsum.photos/100',
//         },
//         {
//           id: 2100457,
//           url: 'https://picsum.photos/300',
//         },
//         {
//           id: 2100459,
//           url: 'https://picsum.photos/250',
//         },
//       ],
//     },
//     {
//       review_id: 1094843,
//       rating: 3,
//       summary: 'This is my summary',
//       recommend: true,
//       response: null,
//       body: 'This is a long review about my special productThis is a long review about my special productThis is a long review about my special productThis is a long review about my special productThis is a long review about my special productThis is a long review about my special productThis is a long review about my special productThis is a long review about my special productThis is a long review about my special productThis is a long review about my special product',
//       date: '2021-11-13T00:00:00.000Z',
//       reviewer_name: 'd',
//       helpfulness: 5,
//       photos: [
//         {
//           id: 2100474,
//           url: 'https://picsum.photos/1000',
//         },
//         {
//           id: 2100475,
//           url: 'https://picsum.photos/1003',
//         },
//         {
//           id: 2100476,
//           url: 'https://picsum.photos/1001',
//         },
//       ],
//     },
//     {
//       review_id: 841407,
//       rating: 5,
//       summary: 'Best Ever! ',
//       recommend: true,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
//       date: '2021-09-23T00:00:00.000Z',
//       reviewer_name: 'chester',
//       helpfulness: 4,
//       photos: [
//         {
//           id: 1595448,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632370529/lixlgtng4vu3kyp4p8ah.png',
//         },
//       ],
//     },
//     {
//       review_id: 841409,
//       rating: 4,
//       summary: 'awesome',
//       recommend: true,
//       response: null,
//       body: 'I\'m excited to post the first 4-star review here.\nit\'s a great onesie.',
//       date: '2021-09-23T00:00:00.000Z',
//       reviewer_name: 'batman',
//       helpfulness: 1,
//       photos: [],
//     },
//     {
//       review_id: 841207,
//       rating: 2,
//       summary: 'Not a fan',
//       recommend: false,
//       response: null,
//       body: 'I did not like this product it was not good I did not like it.',
//       date: '2021-09-19T00:00:00.000Z',
//       reviewer_name: 'notafan',
//       helpfulness: 1,
//       photos: [],
//     },
//     {
//       review_id: 1095125,
//       rating: 5,
//       summary: 'ds',
//       recommend: true,
//       response: null,
//       body: 'dafwefesewqgsafdsafdsadsafdsafsdafdfsdafeafdsadaff',
//       date: '2021-11-29T00:00:00.000Z',
//       reviewer_name: 'dafsda',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 1095124,
//       rating: 5,
//       summary: 'fds',
//       recommend: true,
//       response: null,
//       body: 'fafderqerqewrewqrewqrewqrewqrewqreewqrewqrewqdafdsafd',
//       date: '2021-11-29T00:00:00.000Z',
//       reviewer_name: 'fdsa',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100575,
//           url: 'blob:http://54.183.142.178:3001/3c2bca00-1215-4f70-a1ca-aafaf99ade0d',
//           url: 'blob:http://34.223.4.224:3001/3c2bca00-1215-4f70-a1ca-aafaf99ade0d',
//         },
//       ],
//     },
//     {
//       review_id: 1095109,
//       rating: 5,
//       summary: 'awesome',
//       recommend: true,
//       response: null,
//       body: 'this is a very cool outfit and a very cool website',
//       date: '2021-11-25T00:00:00.000Z',
//       reviewer_name: 'adrian',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 1095091,
//       rating: 5,
//       summary: '',
//       recommend: true,
//       response: null,
//       body: '',
//       date: '2021-11-23T00:00:00.000Z',
//       reviewer_name: '',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 1095083,
//       rating: 5,
//       summary: 'Kinda dig it',
//       recommend: true,
//       response: null,
//       body: 'This is what you make me do more than 100 times a day',
//       date: '2021-11-22T00:00:00.000Z',
//       reviewer_name: 'goat',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100572,
//           url: 'blob:http://127.0.0.1:80/72cdcbad-9f05-4c3b-8310-7fd86189f7c4',
//         },
//       ],
//     },
//     {
//       review_id: 1095080,
//       rating: 5,
//       summary: 'I love this product!',
//       recommend: true,
//       response: null,
//       body: 'This is the best purchase I\'ve made all year. You should buy one, too!',
//       date: '2021-11-22T00:00:00.000Z',
//       reviewer_name: 'Chester The Tester',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100570,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1637542245/ylzhpag6tr8ynvaay6et.jpg',
//         },
//         {
//           id: 2100571,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1637542245/xxsb0qdthdzmfv3wg8ok.jpg',
//         },
//       ],
//     },
//     {
//       review_id: 1095079,
//       rating: 5,
//       summary: 'Best Purchase Ever!',
//       recommend: true,
//       response: null,
//       body: 'This is the single greatest product I\'ve ever purchased. ',
//       date: '2021-11-22T00:00:00.000Z',
//       reviewer_name: 'Chester the Tester',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100568,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1637541923/hfpzgliehqtoqd4cgudt.jpg',
//         },
//         {
//           id: 2100569,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1637541923/zwl1hl82zaeyr5w9fkbo.jpg',
//         },
//       ],
//     },
//     {
//       review_id: 1095078,
//       rating: 3,
//       summary: 'It\'s fine',
//       recommend: false,
//       response: null,
//       body: 'I did not like it that much, but it may be Okay for others.',
//       date: '2021-11-21T00:00:00.000Z',
//       reviewer_name: 'anonymous',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 1095077,
//       rating: 5,
//       summary: 'Great for sous vide (disregard reviews by those who didn\'t read the product description)',
//       recommend: true,
//       response: null,
//       body: 'We\'ve been very happy with their pressure cookers (4, 6 and 8 qt) and wanted a good multi-cooker to cover our slow-cooking needs. This offered sous vide which neither the All-Clad nor the Cuisinart had. We\'ve got two sous vide immersion devices which work great but aren\'t good for long, 24-hour (or more) jobs because of evaporation (you have to cover the pot with foil). Made some over-the-top ribs and there was no drop in the water level during the entire 24-hour period. Highly recommend!',
//       date: '2021-11-21T00:00:00.000Z',
//       reviewer_name: 'donot report this review',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100566,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1637535526/xzcaurk1lhfoz0rbvjg8.jpg',
//         },
//         {
//           id: 2100567,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1637535526/glb9mu5cfmj9dk9bypfq.jpg',
//         },
//       ],
//     },
//     {
//       review_id: 1095070,
//       rating: 1,
//       summary: 'hahahahahah I don\'t like it llllllll',
//       recommend: false,
//       response: null,
//       body: 'sdfasdfawefijawoiejfoiawjeoijfoaijwegaowijegoijijoawijeofijaowiejgoijawoiejgoioiawjegoaasdfwerwetwet',
//       date: '2021-11-20T00:00:00.000Z',
//       reviewer_name: 'wertwgwegw',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 1095064,
//       rating: 1,
//       summary: 'hahahahahah I don\'t like it llllllll',
//       recommend: false,
//       response: null,
//       body: 'sdfasdfawefijawoiejfoiawjeoijfoaijwegaowijegoijijoawijeofijaowiejgoijawoiejgoioiawjegoaasdfwerwetwet',
//       date: '2021-11-19T00:00:00.000Z',
//       reviewer_name: 'wertwgwegw',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100562,
//           url: 'http://placecorgi.com/250',
//         },
//       ],
//     },
//     {
//       review_id: 1095063,
//       rating: 4,
//       summary: 'Great jacket for living in the Bay Area!!!',
//       recommend: false,
//       response: null,
//       body: 'I\'m a corporate pilot and I frequently pack for 3-5 day trips. This bag fits everything I need. It\'s a little more snug than the previous 22 bag but that makes sense as this is a slightly smaller bag overall. I purchased this bag because the handles on my previous bag were beginning to wear, I wanted the extra protection of a hard shell, and I wanted a separate laptop/tech compartment so I didn\'t have to carry an additional backpack or risk the laptop being bent inside the suitcase. And also I didn\'t want to pay $4-500 on an airline quality case.',
//       date: '2021-11-19T00:00:00.000Z',
//       reviewer_name: 'someone you loved',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100560,
//           url: 'urlplaceholder/review_5_photo_number_1.jpg',
//         },
//         {
//           id: 2100561,
//           url: 'urlplaceholder/review_5_photo_number_2.jpg',
//         },
//       ],
//     },
//     {
//       review_id: 1095062,
//       rating: 4,
//       summary: 'This is a summary ',
//       recommend: true,
//       response: null,
//       body: 'This is the only answer that actually worked for me as I\'m currently trying to migrate a database to Azure and it contains old style join syntax (which is not allowed in Azure). Most joins are simple to change the syntax of, however SELECT [tab1].[col1], [tab2].[col1] FROM [tab1],[tab2] is',
//       date: '2021-11-19T00:00:00.000Z',
//       reviewer_name: 'nicknamelll',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100559,
//           url: 'http://placecorgi.com/250',
//         },
//       ],
//     },
//     {
//       review_id: 1094921,
//       rating: 5,
//       summary: 'dsdsdsdsdsdsdsdsdssdsd',
//       recommend: true,
//       response: null,
//       body: 'dsdssdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
//       date: '2021-11-13T00:00:00.000Z',
//       reviewer_name: 'dsdsdssasds',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 2100501,
//           url: 'blob:http://3.137.199.109/6c8eef9f-fcdf-4fa7-861e-6f8044d5a6d9',
//         },
//       ],
//     },
//     {
//       review_id: 1094920,
//       rating: 5,
//       summary: 'sdfsdfsdfsd',
//       recommend: true,
//       response: null,
//       body: 'ddddfdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
//       date: '2021-11-13T00:00:00.000Z',
//       reviewer_name: 'dfdfd',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841735,
//       rating: 4,
//       summary: 'fsdadfsd',
//       recommend: false,
//       response: null,
//       body: 'asdfdsafdsafsdfsdaf;odsajlkfjsdakfjklsdajklfjdsljf;lsjdalkfjskladfsdf',
//       date: '2021-10-02T00:00:00.000Z',
//       reviewer_name: 'fsaddfas',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841734,
//       rating: 5,
//       summary: 'fsafdsaf',
//       recommend: false,
//       response: null,
//       body: 'asfdasfsdfasdfdsafdsafasdfsadfdsafsdafsadfasdfsadfsadfsdafsdafsadf',
//       date: '2021-10-02T00:00:00.000Z',
//       reviewer_name: 'fkjadsklfjds',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841733,
//       rating: 4,
//       summary: 'fdasfdasfsa',
//       recommend: false,
//       response: null,
//       body: 'fsdafsadfasdfasdfasdfasdfasdfsadfsadfdsadffadsfsdafsda',
//       date: '2021-10-02T00:00:00.000Z',
//       reviewer_name: 'flkasdf',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841684,
//       rating: 4,
//       summary: 'fdsafsda',
//       recommend: true,
//       response: null,
//       body: 'fsadfsavfdsagdsfsdafasdfdfasdfasdfdsfdsafsadffadsfdsaf',
//       date: '2021-09-28T00:00:00.000Z',
//       reviewer_name: 'fdsafdsaf',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841529,
//       rating: 5,
//       summary: 'asdfsdaf',
//       recommend: false,
//       response: null,
//       body: 'asdfdsafdsagsadgsadgasgsadgsdagdsafasdfdfdfdfdfdfdfd',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'asdfsadf',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595497,
//           url: 'https://www.linkpicture.com/q/Screen-Shot-2021-09-23-at-5.15.16-PM.png',
//         },
//       ],
//     },
//     {
//       review_id: 841527,
//       rating: 5,
//       summary: 'Awesome',
//       recommend: true,
//       response: null,
//       body: 'I loved this product so much that I am buying some for all my friends. An ocean style for Katara and a desert style for Toph! ',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'Zuko',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595496,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632526572/bzkdic3sdcmqfsfauscv.jpg',
//         },
//       ],
//     },
//     {
//       review_id: 841523,
//       rating: 5,
//       summary: 'asdfasdfdsaf',
//       recommend: false,
//       response: null,
//       body: 'asdfasdfasdfasdfsadfsadfasdfdsafsadfdsfasdfdafsdfasdf',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'asdfasdfsa',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595494,
//           url: 'https://www.linkpicture.com/q/Screen-Shot-2021-09-23-at-5.15.16-PM.png',
//         },
//       ],
//     },
//     {
//       review_id: 841522,
//       rating: 4,
//       summary: 'asdfdsaf',
//       recommend: false,
//       response: null,
//       body: 'asdfasdfdsafasdfasdfdsafasdfdsfasdfafsadfsdafdsafasdfsad',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'asdfasdfsadf',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595493,
//           url: 'https://www.linkpicture.com/q/Screen-Shot-2021-09-23-at-5.15.16-PM.png',
//         },
//       ],
//     },
//     {
//       review_id: 841526,
//       rating: 3,
//       summary: 'asdfasdfsafsdaf',
//       recommend: true,
//       response: null,
//       body: 'asdfasdhsdvnsdvndkvdnvdkvndknvkdnvkdnvdfsafsdfsadfsdaf',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'asdfsdagfasdgdsag',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595495,
//           url: 'https://www.linkpicture.com/q/Screen-Shot-2021-09-23-at-5.15.16-PM.png',
//         },
//       ],
//     },
//     {
//       review_id: 841505,
//       rating: 2,
//       summary: 'headline',
//       recommend: false,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'chester',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841504,
//       rating: 2,
//       summary: 'headline',
//       recommend: false,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'chester',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841475,
//       rating: 1,
//       summary: 'Not a fan.',
//       recommend: false,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'chester',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841474,
//       rating: 2,
//       summary: 'Comfy but bust',
//       recommend: false,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'chester',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595484,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632507833/cvczxthqer4dnzgoeduz.png',
//         },
//       ],
//     },
//     {
//       review_id: 841473,
//       rating: 2,
//       summary: 'Comfy but bust',
//       recommend: false,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'chesterTheTester',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595483,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632507567/ikwo1zz6f4mbyumxllpv.png',
//         },
//       ],
//     },
//     {
//       review_id: 841471,
//       rating: 2,
//       summary: 'Comfy but bust',
//       recommend: false,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'chester',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841469,
//       rating: 5,
//       summary: 'my dude',
//       recommend: true,
//       response: null,
//       body: 'duuuudesdfbasdfgfdsgdfhdfhasdfbdfzhfhsfgasdgasgsadgsdag',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'jackson11',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841459,
//       rating: 3,
//       summary: 'Lorem ipsum dolor sit amet',
//       recommend: true,
//       response: null,
//       body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'test',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595476,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632501700/cg81ysdcv9ar7yvh4zcw.png',
//         },
//         {
//           id: 1595477,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632501700/mnujnvvqslisb48d7ssp.png',
//         },
//       ],
//     },
//     {
//       review_id: 841446,
//       rating: 5,
//       summary: '',
//       recommend: true,
//       response: null,
//       body: 'sdfswersdflksadfjnvxzljfasdjroiwerhsadfasdhnvoasjdfoiewr',
//       date: '2021-09-24T00:00:00.000Z',
//       reviewer_name: 'aaa',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841411,
//       rating: 5,
//       summary: 'Best Ever! ',
//       recommend: true,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
//       date: '2021-09-23T00:00:00.000Z',
//       reviewer_name: 'chesterTheTester',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595451,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632371215/rgmjroslmtq6lipanckz.png',
//         },
//         {
//           id: 1595452,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632371215/bbpia2andhlsn1kaauqt.png',
//         },
//       ],
//     },
//     {
//       review_id: 841410,
//       rating: 5,
//       summary: 'Best Ever! ',
//       recommend: false,
//       response: null,
//       body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
//       date: '2021-09-23T00:00:00.000Z',
//       reviewer_name: 'chester',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595449,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632370847/ntpufp9rgvguute7mvgt.png',
//         },
//         {
//           id: 1595450,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632370847/oi0px6pr1v2iem1uvzce.png',
//         },
//       ],
//     },
//     {
//       review_id: 841408,
//       rating: 5,
//       summary: 'Best Ever! ',
//       recommend: true,
//       response: null,
//       body: 'b4ab4f3de2bee60f8eab4f74d7d00ece244c1c83',
//       date: '2021-09-23T00:00:00.000Z',
//       reviewer_name: 'Chester',
//       helpfulness: 0,
//       photos: [],
//     },
//     {
//       review_id: 841336,
//       rating: 5,
//       summary: 'Very good',
//       recommend: true,
//       response: null,
//       body: 'lorem ipsum',
//       date: '2021-09-22T00:00:00.000Z',
//       reviewer_name: 'tester',
//       helpfulness: 0,
//       photos: [
//         {
//           id: 1595426,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632328878/pfrvwz00bnqhjympmxg4.png',
//         },
//         {
//           id: 1595427,
//           url: 'https://res.cloudinary.com/drbwyfh4x/image/upload/v1632328889/xggvxej6ojsjn0r4j5eg.png',
//         },
//       ],
//     },
//     {
//       review_id: 841198,
//       rating: 1,
//       summary: 'Test#5',
//       recommend: false,
//       response: null,
//       body: 'TestTestTestTestTestTestTestTestTestTestTestTestTestTest',
//       date: '2021-09-18T00:00:00.000Z',
//       reviewer_name: 'Test',
//       helpfulness: 0,
//       photos: [],
//     },
//   ],
// };

// export default dummyDataReviews;


////App practice/////
// import React, { useState, useEffect, Fragment, Suspense, lazy } from 'react';
// import axios from 'axios';
// import Loader from 'react-loader-spinner';
// import styled from 'styled-components';

// import {serverURL} from '../config.js';
// import AppContext from '../AppContext.js';

// // import Overview from './overview/Overview.jsx';
// // import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
// // import RatingsReviews from './ratingsReviews/RatingsReviews.jsx';
// // import RelatedItems from './relatedItems/RelatedItems.jsx';

// const Overview = React.lazy(() => import('./overview/Overview.jsx'));
// const QuestionsAnswers = React.lazy(() => import('./questionsAnswers/QuestionsAnswers.jsx'));
// const RatingsReviews = React.lazy(() => import('./ratingsReviews/RatingsReviews.jsx'));
// const RelatedItems = React.lazy(() => import('./relatedItems/RelatedItems.jsx'));

// const Body = styled.div `
//   font-family: 'Open Sans';
//   font-style: normal;
//   background: #38062b;
//   background: linear-gradient(0deg, rgba(56,6,43,1) 10%, rgba(177,169,172,1) 51%, rgba(253,240,213,1) 100%);
// `;


// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(products[0]); // For selecting the current product to be shown

//   useEffect(() => {
//     let clearId = setTimeout(() => {
//       const getApi = async () => {
//         try {

//           const res = await axios.get(
//             `${serverURL}/products`
//           );

//           setProducts(res.data);
//           setSelectedProduct(res.data[0]);
//           setIsLoaded(true);
//         } catch (err) {
//           console.error(err);
//         }
//       };
//       getApi();
//     }, 400);

//     return () => clearTimeout(clearId);
//   }, []);

//   document.body.addEventListener('click', e => {
//     e.stopPropagation();
//     e.stopImmediatePropagation();
//     const element = e.srcElement.localName;
//     const widgetData = e.path.slice(-6);
//     const widget = widgetData[0].className;
//     const date = new Date().toISOString();

//     const sendClickData = async () => {
//       try {
//         const body = {
//           element: element,
//           widget: widget,
//           time: date,
//         };
//         const res = await axios.post(
//           `${serverURL}/interactions`,
//           body,
//           {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           },
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     sendClickData();
//   });

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Body>
//         <Fragment>
//           {isLoaded ? (
//             <>
//               <AppContext.Provider
//                 value={{
//                   productsContext: [products, setProducts],
//                   selectedProductContext: [selectedProduct, setSelectedProduct],
//                 }}
//               >
//                 <Overview />
//                 <RelatedItems />
//                 <QuestionsAnswers />
//                 <RatingsReviews />
//               </AppContext.Provider>
//             </>
//           ) : (
//             <Loader
//               type='Oval'
//               color='#38062B'
//               height={160}
//               width={160}
//               arialLabel='loading-indicator'
//               style={{
//                 position: 'fixed',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//               }}
//             />
//           )}
//         </Fragment>
//       </Body>
//     </Suspense>
//   );
// }

// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Overview from './overview/Overview.jsx';
// import QuestionsAnswers from './questionsAnswers/QuestionsAnswers.jsx';
// import RatingsReviews from './ratingsReviews/RatingsReviews.jsx';
// import RelatedItems from './relatedItems/RelatedItems.jsx';
// import AppContext from '../AppContext.js';
// import Loader from 'react-loader-spinner';
// import styled from 'styled-components';

// import {serverURL} from '../config.js';

// const Body = styled.div `
//   font-family: 'Open Sans';
//   font-style: normal;
//   background: #38062b;
//   background: linear-gradient(0deg, rgba(56,6,43,1) 10%, rgba(177,169,172,1) 51%, rgba(253,240,213,1) 100%);
// `;


// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(products[0]); // For selecting the current product to be shown

//   useEffect(() => {
//     let clearId = setTimeout(() => {
//       const getApi = async () => {
//         try {

//           const res = await axios.get(
//             `${serverURL}/products`
//           );

//           setProducts(res.data);
//           setSelectedProduct(res.data[0]);
//           setIsLoaded(true);
//         } catch (err) {
//           console.error(err);
//         }
//       };
//       getApi();
//     }, 400);

//     return () => clearTimeout(clearId);
//   }, []);

//   document.body.addEventListener('click', e => {
//     e.stopPropagation();
//     e.stopImmediatePropagation();
//     const element = e.srcElement.localName;
//     const widgetData = e.path.slice(-6);
//     const widget = widgetData[0].className;
//     const date = new Date().toISOString();

//     const sendClickData = async () => {
//       try {
//         const body = {
//           element: element,
//           widget: widget,
//           time: date,
//         };
//         const res = await axios.post(
//           `${serverURL}/interactions`,
//           body,
//           {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           },
//         );
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     sendClickData();
//   });

//   return (
//     <Body>
//       <Fragment>
//         {isLoaded ? (
//           <>
//             <AppContext.Provider
//               value={{
//                 productsContext: [products, setProducts],
//                 selectedProductContext: [selectedProduct, setSelectedProduct],
//               }}
//             >
//               <Overview />
//               <RelatedItems />
//               <QuestionsAnswers />
//               <RatingsReviews />
//             </AppContext.Provider>
//           </>
//         ) : (
//           <Loader
//             type='Oval'
//             color='#38062B'
//             height={160}
//             width={160}
//             arialLabel='loading-indicator'
//             style={{
//               position: 'fixed',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           />
//         )}
//       </Fragment>
//     </Body>
//   );
// }

