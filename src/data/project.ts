type project = {
    id: number,
    name: string,
    description: string,
    url: string ,
    codeurl: string,
    image: string,
    tech: Array<string>
}

const Project: Array<project> = [
    {
        id:1,
        name:"Smea Perpustakaan",
        description:"This project is an online library application that allows users to borrow school library books online",
        url:"https://smeadigital.sinaukode.my.id/",
        codeurl:"https://github.com/Zahwan316/ujikom-perpustakaan",
        image:"img/smeadigital.png",
        tech:['Javascript',"React JS","Express JS","Zustand","Tailwind"]
    },
    {
        id:2,
        name:"Pembayaran SPP",
        description:"Website for making monthly tuition payments without an api gateway",
        url:"",
        codeurl:"https://github.com/Zahwan316/ujikom-pembayran-spp",
        image:"img/ujikomspp.png",
        tech:['Javascript',"React JS","Express JS","Zustand","Tailwind"]
    },
    {
        id:3,
        name:"Poin Pelanggaran Siswa",
        description:"This project I created is to record students who violate school rules",
        codeurl:"https://github.com/Zahwan316/poin_siswa",
        url:"",
        image:"img/poinsmkn1banjar.png",
        tech:["HTML","Css","PHP","Javascript"]
    },
    {
        id:4,
        name:"Maul Putra Ampel",
        description:"Maulputraampel is a company profile website showcasing our expertise in the rubber industry. ",
        codeurl:"",
        url:"https://maulputraampel.com",
        image:"img/maulputraampel.png",
        tech:["Wordpress"]
    },
    {
        id:5,
        name:"RPLSmart",
        description:"A blog providing IT articles from RPL SMKN 1 Banjar, designed to share knowledge with everyone. Where I handle backend and some frontend development.",
        codeurl:"",
        url:"https://blog-rplsmart.vercel.app",
        image:"img/rplsmart.PNG",
        tech:["Laravel","Javascript"]
    },
    {
        id:6,
        name:"SmartLearn",
        description:"An online platform that sells various courses, offering users the opportunity to enhance their skills. With my role in backend and some frontend development. ",
        codeurl:"",
        url:"https://smartlearn.sinaukode.my.id",
        image:"img/smartlearn.PNG",
        tech:["Laravel","Javascript"]
    },
]

export default Project