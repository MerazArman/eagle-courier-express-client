// import personal from '../../../images/courier.png';
// import outSide from '../../../images/delivery-truck.png';
// import plane from '../../../images/plane.PNG';
// import ship from '../../../images/ship2.PNG';
// import warehouse from '../../../images/wereHousee.PNG';
// import express from '../../../images/express.png';


// const servicesData = [
//     {
//         key: '1a',
//         title: 'Standard Courier',
//         description:'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
//         img:"https://imgur.com/AYtfZJ1.png",
//         type:'Domestic Courier',
//         category:"Inside City",
//         prices:[
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Same Day",
//                 id:"111aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:130,
//                 day:"Same Day",
//                 id:"122aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:160,
//                 day:"Same Day",
//                 id:"133aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:180,
//                 day:"Same Day",
//                 id:"144aaa"
//             },
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:90,
//                 day:"Next Day",
//                 id:"155aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:110,
//                 day:"Next Day",
//                 id:"166aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Next Day",
//                 id:"177aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:130,
//                 day:"Next Day",
//                 id:"188aaa"
//             }
//         ]
//     },

//     {
//         key: '2a',
//         title: 'Express Courier',
//         description:'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
//         img:"https://imgur.com/YndCNOK.png",
//         type:'Domestic Courier',
//         category:"Outside City",
//         prices:[
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Two Days",
//                 id:"111aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:130,
//                 day:"Two Days",
//                 id:"122aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:160,
//                 day:"Two Days",
//                 id:"133aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:180,
//                 day:"Two Days",
//                 id:"144aaa"
//             },
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:90,
//                 day:"Four Days",
//                 id:"155aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:110,
//                 day:"Four Days",
//                 id:"166aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Four Days",
//                 id:"177aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:130,
//                 day:"Four Days",
//                 id:"188aaa"
//             }
//         ]
//     },
//     {
//         key: '3a',
//         title: 'Air Freight',
//         type:'International Courier',
//         description:'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
//         img:"https://imgur.com/4mbQP31.png",
//         category:'Asia - Europe - Africa',
//         prices:[
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Two Days",
//                 id:"111aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:130,
//                 day:"Two Days",
//                 id:"122aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:160,
//                 day:"Two Days",
//                 id:"133aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:180,
//                 day:"Two Days",
//                 id:"144aaa"
//             },
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:90,
//                 day:"Four Days",
//                 id:"155aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:110,
//                 day:"Four Days",
//                 id:"166aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Four Days",
//                 id:"177aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:130,
//                 day:"Four Days",
//                 id:"188aaa"
//             }
//         ]
//     },
//     {
//         key: '6a',
//         title: 'Ocean Freight',
//         description:'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
//         img:"https://imgur.com/YFTWweX.png",
//         type:'International Courier',
//         category:'Oceania - South America - North America',
//         prices:[
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Two Days",
//                 id:"111aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:130,
//                 day:"Two Days",
//                 id:"122aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:160,
//                 day:"Two Days",
//                 id:"133aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:180,
//                 day:"Two Days",
//                 id:"144aaa"
//             },
//             {
//                 kg:"Upto 1 kg",
//                 category:"Inside City",
//                 price:90,
//                 day:"Four Days",
//                 id:"155aaa"
//             },
//             {
//                 kg:"Upto 2 Kg ",
//                 category:"Inside City",
//                 price:110,
//                 day:"Four Days",
//                 id:"166aaa"
//             },
//             {
//                 kg:"Upto 3 kg",
//                 category:"Inside City",
//                 price:120,
//                 day:"Four Days",
//                 id:"177aaa"
//             },
//             {
//                 kg:"Upto 5 kg",
//                 category:"Inside City",
//                 price:130,
//                 day:"Four Days",
//                 id:"188aaa"
//             }
//         ]
//     },
//     {
//         key: '4a',
//         title: 'Over Night Courier',
//         description:'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
//         img:"https://imgur.com/ep5aQP3.png",
//         category:"Emergency Couriers",
//         type:'Domestic & International Courier',
//         prices:[
    
//             {
//                 kg:"Upto 1 kg ",
//                 category:"In Country",
//                 price:90,
//                 day:"Emergency",
//                 id:"155aaa"
//             },
//             {
//                 kg:"Upto 2 kg ",
//                 category:"In Country",
//                 price:110,
//                 day:"Emergency",
//                 id:"166aaa"
//             },
//             {
//                 kg:"Upto 3 kg ",
//                 category:"In Country",
//                 price:120,
//                 day:"Emergency",
//                 id:"177aaa"
//             },
//             {
//                 kg:"Upto 5 kg ",
//                 category:"In Country",
//                 price:130,
//                 day:"Emergency",
//                 id:"188aaa"
//             },
//             {
//                 kg:"Upto 1 kg ",
//                 category:"In Intentional",
//                 price:120,
//                 day:"Emergency",
//                 id:"111aaa"
//             },
//             {
//                 kg:"Upto 2 kg ",
//                 category:"In Intentional",
//                 price:130,
//                 day:"Emergency",
//                 id:"122aaa"
//             },
//             {
//                 kg:"Upto 3 kg ",
//                 category:"In Intentional",
//                 price:160,
//                 day:"Emergency",
//                 id:"133aaa"
//             },
//             {
//                 kg:"Upto 5 kg ",
//                 category:"In Intentional",
//                 price:180,
//                 day:"Emergency",
//                 id:"144aaa"
//             },
//         ]
//     },
//     {
//         key: '5a',
//         title: 'Warehousing',
//         description:'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
//         img:"https://imgur.com/5t7PyTy.png",
//         category:"Move Logistics",
//         type:'Domestic Courier',
//         prices:[
//             {
//                 kg:"Upto 1 kg ",
//                 category:"Inside City",
//                 price:120,
//                 day:"Same Day",
//                 id:"111aaa"
//             },
//             {
//                 kg:"Upto 2 kg ",
//                 category:"Inside City",
//                 price:130,
//                 day:"Same Day",
//                 id:"122aaa"
//             },
//             {
//                 kg:"Upto 3 kg ",
//                 category:"Inside City",
//                 price:160,
//                 day:"Same Day",
//                 id:"133aaa"
//             },
//             {
//                 kg:"Upto 5 kg ",
//                 category:"Inside City",
//                 price:180,
//                 day:"Same Day",
//                 id:"144aaa"
//             },
//             {
//                 kg:"Upto 1 kg ",
//                 category:"Inside City",
//                 price:90,
//                 day:"Next Day",
//                 id:"155aaa"
//             },
//             {
//                 kg:"Upto 2 kg ",
//                 category:"Inside City",
//                 price:110,
//                 day:"Next Day",
//                 id:"166aaa"
//             },
//             {
//                 kg:"Upto 3 kg ",
//                 category:"Inside City",
//                 price:120,
//                 day:"Next Day",
//                 id:"177aaa"
//             },
//             {
//                 kg:"Upto 5 kg ",
//                 category:"Inside City",
//                 price:130,
//                 day:"Next Day",
//                 id:"188aaa"
//             }
//         ]
//     }
// ]

// export default servicesData