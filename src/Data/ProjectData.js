const projects = [{
    id:1,
    name:'Warehouse Management App ',
    path: 'https://ik.imagekit.io/t9vnjnjlba/thumbnails/Warehouse-management.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916790594',
    alt:'Warehouse Management App ',
    description:'This application is used to manage the data of a warehouse. Keeping track of various products present in the warehouse. Ability to add photos and description for products. Products can be looked up using their barcodes. Proper roles and authentication provided. Allow only Photographers to add photos and content writers to add content. Can populate the data for the warehouse using csvs for the bills',
    modalShow:false,
    link:'http://warehousemanage.herokuapp.com/',
    techStack:['html','css','javaScript', 'Django', 'OCR-Scanning', 'SQL'],
    fpScreenshot:'https://ik.imagekit.io/t9vnjnjlba/fpScreenshots/warehouse-management.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916708825'
},
{
    id:2,
    name:'Rescue Maps ',
    path:'https://ik.imagekit.io/t9vnjnjlba/thumbnails/Rescue-maps.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916794458',
    alt:'Rescue Maps ',
    description:'Project made for the theme of disaster management. Provides live flood tracking using rain data . Categorizes areas as safe,moderate and dangerous based on data. Provides rescue organizations with an interface to setup a rescue camps and provide its various details like capacity, no of available beds along with their geographical location of the map. Organizations can get idea of population in a particular location using heat maps. Has an interface for the people who need to be rescued. They can look for the various camps and register their families by clicking on a camp and its capacity. Can also provide feedback for their registered camps',
    modalShow:false,
    link:'http://rescue-maps.herokuapp.com/',
    techStack:['html','css','javaScript','Django','D3'],
    fpScreenshot:'https://ik.imagekit.io/t9vnjnjlba/fpScreenshots/rescue-maps.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916701316'
},

{
    id:3,
    name:'Lex Bolster ',
    path:'https://ik.imagekit.io/t9vnjnjlba/thumbnails/Lex-bolster.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916787176',
    alt:'Lex Bolster ',
    description:'A modern and refreshing cover page for a multi-functional firm which operates in law, educational trainings, among many other services. Developed using serverless backend services. Designed using modern aesthetic and minimalistic design principles',
    modalShow:false,
    link:'http://lexbolster.com',
    techStack:['html','css','javaScript','Amazon-SES&Lambda'],
    fpScreenshot:'https://ik.imagekit.io/t9vnjnjlba/fpScreenshots/lex-bolster.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916704843'
},

{
    id:4,
    name:'Examination Management System ',
    path:'https://ik.imagekit.io/t9vnjnjlba/thumbnails/Examination-management.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916798384',
    alt:'Examination Mangement System ',
    description:'Built as a complete system to store and transport the examination files with the maximum security. Workflow with Examination controller, teachers and publishers. Teachers set exam and files for exams stored in distributed DMS called IPFS. Index keys for files then generated in IPFS stored in private blockchain called Hyperledger. Only viewable by Superintendent of examination 1 hour before examination as part of Smart Contract. One of the keys then accessible sent to publisher 1 hour before exam. Exam file accessible only on that day. Also AES encryption while sending files between the roles applied for extra security',
    modalShow:false,
    link:'',
    techStack:['html','css','javaScript', 'Django','SQL','BlockChain','Hyperledger'],
    fpScreenshot:'https://ik.imagekit.io/t9vnjnjlba/fpScreenshots/Examination-management.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916712384'
},
{
    id:5,
    name:'Burger Builder',
    path:'https://ik.imagekit.io/t9vnjnjlba/thumbnails/Burger-builder.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916783669',
    alt:'Burger Builder ',
    description:'A simple application with React using React hooks, CSS Modules and Google firebase for backend. Has authentication provided by Google Firebase. Tracks orders sent by the users',
    modalShow:false,
    link:'https://burger-builder-bscode.netlify.app/',
    techStack:['html','css','javaScript','ReactJS','Redux', 'npm','CSS-Modules','Google-Firebase','NoSQL'],
    fpScreenshot:'https://ik.imagekit.io/t9vnjnjlba/fpScreenshots/burger-builder.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673916716250'
},
];

export default projects;
