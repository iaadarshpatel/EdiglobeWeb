import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './Component/aboutUs/about';
import TermsCondition from './Component/TermsCondition/TermsCondition';
import FaqPage from './Component/FaqPage/FaqPage';
import Privacy from './Component/Privacy-Policy/Privacy';
import Contact from './Component/ContactUs/Contact';
import AllDeparts from './Component/AllDeparts/AllDeparts';
import Certificates from './Component/All-sub-pages/Certificates/certificates';
import Checkcertificate from './Component/All-sub-pages/Checkcertificate/checkcerttificate';
import Career from './Component/All-sub-pages/Career/Career';
import CampusAmb from './Component/All-sub-pages/CampusAmb/CampusAmb';
import CSE from './Component/All-sub-pages/course-deatils/CSE';
import ECE from './Component/All-sub-pages/course-deatils/ECE';
import Civil from './Component/All-sub-pages/course-deatils/Civil';
import Mechanical from './Component/All-sub-pages/course-deatils/Mechanical';
import Management from './Component/All-sub-pages/course-deatils/Management';
import BioTechnology from './Component/All-sub-pages/course-deatils/Biotechnology';
import Refundpolicy from './Component/All-sub-pages/refundPolicy/Refundpolicy';
import Dev from './Component/All-sub-pages/ComputerScience/Dev';
import AllEmployee from './Component/All-sub-pages/AllEmployee/AllEmployee';
import { ai, arvr, finance, machinelearning, webdev, staadpro, vlsi, aws, hr, bioinformatics, marketingmanagement, autocad, robotics, geneticengineering, digitalmarketing, appdev, cybersecurity, ba, stockmarket, iot, nanoscience, datascience } from './Component/All-sub-pages/ComputerScience/courseOutlineData';
import ObForm from './Component/All-sub-pages/AllEmployee/ObForm';
import Openform from './Component/All-sub-pages/AllEmployee/Openform'
import Preloader from './Component/All-sub-pages/AllEmployee/Preloader';
import PointConfetti from './Component/All-sub-pages/AllEmployee/PointConfetti';
import Projectsubmission from './Component/All-sub-pages/Projects/Projectpage'
import Project from './Component/All-sub-pages/Projects/Project'
import Upload from './Upload';
import Login from './Login';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig";


function App() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const PropsDetails = [
    {
      id: 1,
      title: "App Development",
      course_desc: "Crafting seamless and responsive web applications for an enhanced user experience",
      objective: (
        <>
          Android app development aims to create functional and user-friendly applications for the Android operating system, catering to various needs such as entertainment, productivity, and communication.
          <br /><br />
          One of the key aspects of Android app development is the emphasis on diversity and customization. The Android ecosystem supports a vast array of devices with different screen sizes, resolutions, and hardware specifications. Developers strive to create applications that offer a seamless and responsive user experience across this diverse landscape.
        </>
      ),
      eligibility: "There are no specific eligibility criteria for Android app development. However, a strong understanding of programming languages such as Java or Kotlin, familiarity with development tools like Android Studio, and knowledge of app design principles are beneficial.",
      course_outline: appdev,
      check_curriculum: "The app development curriculum encompasses programming, UI/UX design, and backend development using Swift and Flutter, guiding learners through cross-platform deployment and API integration for a comprehensive skill set.",
      download: "https://drive.google.com/uc?export=download&id=1z8KDJQb5aZYrK30a6gFMsieXAkj2NgnF"
    },
    {
      id: 2,
      title: "Web Development",
      course_desc: "Crafting responsive and dynamic websites for an enhanced user experience",
      objective: (
        <>
          Web development aims to create functional and user-friendly websites, catering to various needs such as information dissemination, e-commerce, and communication.
          <br /><br />
          One of the key aspects of web development is the emphasis on responsive design and dynamic content. Developers strive to create websites that offer a seamless and engaging user experience across different devices and screen sizes.
        </>
      ),
      eligibility: "There are no specific eligibility criteria for web development. However, a strong understanding of programming languages such as HTML, CSS, and JavaScript, familiarity with web development tools, and knowledge of design principles are beneficial.",
      course_outline: webdev,
      check_curriculum: "The web development curriculum encompasses front-end and back-end development, guiding learners through the creation of dynamic and interactive websites.",
      download: "https://drive.google.com/uc?export=download&id=1YqNaEbz1KTMF_Wm4XFzNuoCK7GF1gLjP"
    },
    {
      id: 3,
      title: "Cyber Security",
      course_desc: "It is crucial for shielding organizations and individuals from relentless cyber threats",
      objective: (
        <>
          Cybersecurity aims to protect digital systems, networks, and data from unauthorized access, attacks, and damage.
          <br /><br />
          Its primary objective is to safeguard confidentiality, integrity, and availability of information, ensuring that individuals, organizations, and governments can operate securely in the digital realm. This involves implementing robust measures, such as firewalls, encryption, and intrusion detection systems, to mitigate cyber threats and vulnerabilities.
        </>
      ),
      eligibility: "Eligibility for cybersecurity roles typically requires a relevant degree in computer science or a related field, along with proficiency in programming languages, network security, and information systems. Certifications like CISSP or CompTIA Security+ may be advantageous. Practical experience and a strong understanding of evolving cyber threats are also essential.",
      course_outline: cybersecurity,
      check_curriculum: "With a focus on resilience and integrity, our cybersecurity services ensure that your data, privacy, and online operations remain safeguarded in the face of ever-changing online risks, allowing you to confidently embrace the opportunities of the digital age.",
      download: "https://drive.google.com/uc?export=download&id=1mMJN-o2d9RoSs4E_NuEmK6bVi_qOZIEL"
    },
    {
      id: 4,
      title: "Digital Marketing",
      course_desc: "It is a dynamic and strategic approach to promoting products or services using digital channels.",
      objective: (
        <>
          Digital marketing is a dynamic and strategic approach to promoting products or services using digital channels. It encompasses a wide range of online platforms such as social media, search engines, email, and websites. The primary goal of digital marketing is to reach and engage with a target audience, driving brand awareness, customer acquisition, and conversions.
        </>
      ),
      eligibility: "Eligibility for digital marketing typically requires a basic understanding of marketing principles, digital platforms, and communication skills. Individuals with a background in business, marketing, or related fields often find it advantageous. However, digital marketing is inclusive, welcoming diverse skill sets, making it accessible to a broad range of professionals and enthusiasts.",
      course_outline: digitalmarketing,
      check_curriculum: "With a focus on resilience and integrity, our cybersecurity services ensure that your data, privacy, and online operations remain safeguarded in the face of ever-changing online risks, allowing you to confidently embrace the opportunities of the digital age.",
      download: "https://drive.google.com/uc?export=download&id=1tnkiau0xR58yp00A0p89Jy8znb2-_By3"
    },
    {
      id: 5,
      title: "Marketing Marketing",
      course_desc: "It maximizes sales and brand impact through customer-centric strategies.",
      objective: (
        <>
          The objective of marketing management is to strategically plan, implement, and control activities that facilitate the exchange of goods and services, ultimately satisfying customer needs and maximizing organizational goals. This involves understanding market dynamics, creating value propositions, and fostering customer relationships to achieve sustainable competitive advantage and business success.
        </>
      ),
      eligibility: "Eligibility for marketing management programs typically requires a bachelor's degree in any discipline. Some institutions may also consider relevant work experience. Additionally, candidates may need to demonstrate proficiency in English, often through standardized tests like the TOEFL or IELTS for non-native speakers. Specific requirements vary among institutions.",
      course_outline: marketingmanagement,
      check_curriculum: "With a focus on resilience and integrity, our cybersecurity services ensure that your data, privacy, and online operations remain safeguarded in the face of ever-changing online risks, allowing you to confidently embrace the opportunities of the digital age.",
      download: "https://drive.google.com/uc?export=download&id=1p65EP0fM3E8txn71uRlE3UO3wG5e490B"
    },
    {
      id: 6,
      title: "Finance",
      course_desc: "It maximizes sales and brand impact through customer-centric strategies.",
      objective: (
        <>
          The objective of finance is to manage and allocate resources efficiently to achieve organizational goals. It involves making sound financial decisions, optimizing the use of funds, mitigating risks, and maximizing shareholder wealth. Finance aims to ensure the stability, growth, and sustainability of businesses through effective financial planning, analysis, and strategic management.
        </>
      ),
      eligibility: "Eligibility for finance typically requires a strong foundation in financial principles, analytical skills, and relevant education or experience. Candidates often hold degrees in finance, business, or related fields. Financial certifications and a demonstrated understanding of economic trends enhance eligibility. Specific requirements vary by employer and position, emphasizing a blend of education and practical expertise.",
      course_outline: finance,
      check_curriculum: "With a focus on resilience and integrity, our cybersecurity services ensure that your data, privacy, and online operations remain safeguarded in the face of ever-changing online risks, allowing you to confidently embrace the opportunities of the digital age.",
      download: "hhttps://drive.google.com/uc?export=download&id=1C46OzHDQfqsGrHgD9eiuDHATN1GeBB4n"
    },
    {
      id: 7,
      title: "Human Resource",
      course_desc: "It maximizes sales and brand impact through customer-centric strategies.",
      objective: (
        <>
          The primary objective of human resources is to effectively manage and optimize an organization's workforce. This involves recruiting, developing, and retaining talent, fostering a positive work environment, ensuring compliance with employment laws, and aligning HR strategies with overall business goals to enhance organizational performance and employee satisfaction.
        </>
      ),
      eligibility: "Eligibility for human resources roles typically requires a bachelor's degree in human resources, business, or a related field. Relevant experience, strong communication skills, and knowledge of employment laws are often essential. Some positions may demand additional certifications such as SHRM or PHR. Specific requirements vary by employer.",
      course_outline: hr,
      check_curriculum: "The HR curriculum includes topics such as recruitment, employee relations, performance management, and HR strategy, providing comprehensive knowledge for effective human resource management.",
      download: "https://drive.google.com/uc?export=download&id=1HmyRUQ2PP2K0VVO3oUHBmQ0EQEQqhH9N"
    },
    {
      id: 8,
      title: "AutoCad",
      course_desc: "It is essential CAD software for precise 2D and 3D modeling.",
      objective: (
        <>
          AutoCAD is a widely used computer-aided design (CAD) software that enables precise drafting and design of 2D and 3D models. It plays a key role in various industries, including architecture, engineering, and construction, facilitating efficient and accurate project visualization and documentation.
        </>
      ),
      eligibility: "Eligibility for AutoCAD programs typically requires a basic understanding of computer-aided design (CAD) concepts and familiarity with relevant software.",
      course_outline: autocad,
      check_curriculum: "AutoCAD curriculum covers essential CAD skills, including 2D and 3D drafting, design principles, and software proficiency.",
      download: "https://drive.google.com/uc?export=download&id=1otQ7RFCbUqKqInGEDFiwrqm0mqYJ-4pq"
    },
    {
      id: 9,
      title: "Staadpro",
      course_desc: "Structural design software for efficient modeling, analysis, and design of diverse structures.",
      objective: (
        <>
          The primary objective of STAAD.Pro, a structural analysis and design software, is to assist engineers and architects in analyzing and designing a wide range of structures, such as buildings, bridges, and towers. It aims to ensure structural integrity, safety, and efficiency by providing advanced tools for modeling, analysis, and visualization.
        </>
      ),
      eligibility: "STAAD.Pro is a structural analysis and design software widely used in civil engineering. Eligibility typically includes a background in civil or structural engineering, as the software requires understanding of structural concepts. Users should have knowledge of engineering principles, mathematical aptitude, and familiarity with construction practices for effective utilization of STAAD.Pro.",
      course_outline: staadpro,
      check_curriculum: "The STAAD Pro curriculum covers structural analysis and design, including topics like modeling, loading, analysis, and design of various structures using the STAAD Pro software.",
      download: "https://drive.google.com/uc?export=download&id=1zBjzNVOuIqa6f-bDrgIezceGKsAOZqKr"
    },
    {
      id: 10,
      title: "AWS",
      course_desc: "Structural design software for efficient modeling, analysis, and design of diverse structures.",
      objective: (
        <>
          The primary objective of AWS is to provide on-demand access to a shared pool of configurable computing resources, such as servers, storage, and applications, over the internet. This facilitates scalability, flexibility, cost-efficiency, and enables organizations to focus on their core business without the burden of managing complex infrastructure.
        </>
      ),
      eligibility: "AWS eligibility is broad, encompassing individuals, businesses, and organizations of all sizes. To leverage cloud services, one needs internet access and a device. Whether for storage, computing power, or software deployment, cloud computing is accessible to diverse users, making it a versatile and scalable solution for various computing needs.",
      course_outline: aws,
      check_curriculum: "Covers cloud architecture, services (IaaS, PaaS, SaaS), virtualization, security, and hands-on experience with major cloud platforms.",
      download: "https://drive.google.com/uc?export=download&id=1k_756_xGS0v7NMqyI2-zBzvuQFSInUqP"
    },
    {
      id: 11,
      title: "VLSI",
      course_desc: "VLSI involves creating intricate electronic systems through integrated circuits.",
      objective: (
        <>
          The objective of Very Large Scale Integration (VLSI) is to design and implement integrated circuits (ICs) that contain millions or billions of transistors on a single chip. This aims to enhance computational power, reduce size, and improve energy efficiency, enabling the development of advanced and compact electronic devices.
        </>
      ),
      eligibility: "Eligibility for VLSI (Very Large Scale Integration) courses typically requires a bachelor's degree in electrical engineering, electronics, or a related field. Some programs may also consider candidates with relevant work experience. Proficiency in programming languages and a solid foundation in digital electronics are often prerequisites for admission.",
      course_outline: vlsi,
      check_curriculum: "Focuses on semiconductor design, digital and analog circuits, FPGA programming, and advanced topics like ASIC design and verification in a hands-on learning environment.",
      download: "hhttps://drive.google.com/uc?export=download&id=1QYQELtkSMtd62tcIzNApPxqz_Gi9Dp9l"
    },
    {
      id: 12,
      title: "Bio-Informatics",
      course_desc: "Applying computation to analyze biological data for insights into genomics and life sciences.",
      objective: (
        <>
          The objective of bioinformatics is to integrate biological data with advanced computational and statistical methods to extract meaningful insights into complex biological processes. It aims to enhance our understanding of living systems, facilitate drug discovery, and promote personalized medicine by analyzing and interpreting biological information on a large scale.
        </>
      ),
      eligibility: "Eligibility for bioinformatics programs typically requires a bachelor's degree in biology, computer science, or a related field. Some programs may have specific prerequisites in biology, chemistry, and mathematics. Strong analytical and computational skills are essential. Check the admission requirements of the specific institution offering the bioinformatics program for detailed criteria.",
      course_outline: bioinformatics,
      check_curriculum: "FBioinformatics curriculum covers the intersection of biology and computing, exploring genetic data analysis, computational biology, and molecular modeling.",
      download: "https://drive.google.com/c?export=download&id=1VSovnn6QNOxFyLq6FzAhuXiVD6U2sHKg"
    },
    {
      id: 13,
      title: "Robotics",
      course_desc: "Explores programming, electronics, and mechanics, providing students with the expertise to design and construct robots.",
      objective: (
        <>
          The objective of robotics is to design, build, and utilize autonomous or semi-autonomous machines to perform tasks efficiently, safely, and accurately. This interdisciplinary field aims to enhance human capabilities, automate tedious or hazardous activities, advance technology, and explore new frontiers in exploration, industry, healthcare, and various other domains.
        </>
      ),
      eligibility: "Robotics eligibility typically requires a background in engineering, computer science, or a related field. Candidates should possess strong analytical and problem-solving skills. Proficiency in programming languages and a solid understanding of mechanical and electrical systems are crucial. Advanced degrees may be preferred for research or specialized roles.",
      course_outline: robotics,
      check_curriculum: "Covers programming, electronics, and mechanics, equipping students with skills for designing and building robots.",
      download: "https://drive.google.com/fuc?export=download&id=1BeJcJR5OfPZp31tl9jVZ9aHPIT8Fjoas"
    },
    {
      id: 14,
      title: "Genetic Engineering",
      course_desc: "Molecular Biology, Genetics, Bioinformatics, Genetic Engineering Techniques, Ethics, and Laboratory Work.",
      objective: (
        <>
          The objective of genetic engineering is to manipulate the genetic material of organisms, altering their traits or introducing new ones. This technology aims to enhance agricultural productivity, develop therapeutic solutions, and advance scientific understanding of genetics. Genetic engineering holds the potential to address challenges in medicine, agriculture, and environmental sustainability.
        </>
      ),
      eligibility: "Eligibility for genetic engineering typically requires a strong educational background in biological sciences or a related field, such as molecular biology. Advanced degrees, such as a master's or Ph.D., are often preferred. Practical experience in a laboratory setting and a deep understanding of genetics and biotechnology are essential for pursuing a career in genetic engineering.",
      course_outline: geneticengineering,
      check_curriculum: "Covers programming, electronics, and mechanics, equipping students with skills for designing and building robots.",
      download: "https://drive.google.com/uc?export=download&id=1bzVFcmJM7UkBTdBlxagpthCF-pqHC0JJ"
    },
    {
      id: 15,
      title: "Machine Learning",
      course_desc: "Introduction, supervised learning, unsupervised learning, algorithms, applications, evaluation, deployment, ethics.",
      objective: (
        <>
          Machine learning aims to develop algorithms that enable computers to learn from data and improve their performance over time without explicit programming. The primary objective is to create models that can generalize patterns from the input data, make predictions, and adapt to new information, enhancing decision-making and problem-solving across various domains. <br /><br /> This interdisciplinary field combines statistics, computer science, and domain expertise to automate tasks, discover insights, and drive advancements in artificial intelligence, fostering innovation in areas like healthcare, finance, and autonomous systems.
        </>
      ),
      eligibility: "Eligibility for machine learning roles typically requires a strong foundation in mathematics, statistics, and programming. A bachelor's degree in a related field such as computer science or engineering is common, while advanced positions may require a master's or Ph.D. Relevant experience and proficiency in machine learning frameworks are also crucial.",
      course_outline: machinelearning,
      check_curriculum: "A machine learning course covers supervised & unsupervised learning, neural networks, model evaluation, and practical applications.",
      download: "https://drive.google.com/uc?export=download&id=1kdOw1acUKLJUPwWcP0hovXpql8TpIo53"
    },
    {
      id: 16,
      title: "Artifical Intelligence",
      course_desc: "Harness the Power of Artificial Intelligence to Shape Innovation and Transform Industries.",
      objective: (
        <>
          The primary objective of artificial intelligence (AI) is to develop systems that can perform tasks requiring human-like intelligence, such as learning, reasoning, problem-solving, perception, and language understanding. AI aims to create machines capable of autonomous decision-making and adaptation, enhancing efficiency, productivity, and innovation across various domains.
        </>
      ),
      eligibility: "Artificial Intelligence eligibility involves a foundation in computer science, mathematics, and programming. Skills in machine learning, data analysis, and problem-solving are essential. Additionally, a strong understanding of algorithms, statistics, and domain-specific knowledge enhances AI capabilities. Continuous learning and adaptability are crucial due to AI's evolving nature.",
      course_outline: ai,
      check_curriculum: "An AI curriculum covers machine learning, neural networks, natural language processing, computer vision, and ethical considerations.",
      download: "https://drive.google.com/uc?export=download&id=1m3uCSNXfCjZsk-d4pvdjGongk9hrxXNA"
    },
    {
      id: 17,
      title: "AR/VR",
      course_desc: "Discover the immersive world: Building Realities in AR/VR.",
      objective: (
        <>
          The primary objective of AR/VR is to create immersive and interactive experiences that blend the physical and digital worlds, enhancing real-life environments and transforming user interactions through simulated or augmented realities.
        </>
      ),
      eligibility: "Eligibility for AR/VR courses varies, but generally, having a background or interest in computer science, programming, design, or related fields is beneficial. Some courses may require basic knowledge of coding languages like Python, C#, or C++. Check individual course requirements for specific eligibility criteria.",
      course_outline: arvr,
      check_curriculum: "An AR/VR curriculum often covers topics like immersive technology basics, 3D modeling, programming languages (e.g., Unity, C#), spatial computing, user experience design, and creating interactive experiences.",
      download: ""
    },
    {
      id: 18,
      title: "Business Analytics",
      course_desc: "Discover the immersive world: Building Business.",
      objective: (
        <>
          The primary objective of Business Analytics is to harness data insights for informed decision-making, operational optimization, and sustainable business success. Decision support is a cornerstone, providing decision-makers with timely, accurate, and actionable insights derived from data analysis. These insights offer a deeper understanding of customer behavior, market trends, and operational performance, aligning decisions with strategic objectives.
        </>
      ),
      eligibility: "Eligibility for Business Analytics courses typically requires a bachelor's degree in fields like business, economics, statistics, mathematics, or computer science, along with proficiency in quantitative subjects.",
      course_outline: ba,
      check_curriculum: "The Business Analytics curriculum blends statistical analysis, data mining, and business fundamentals, emphasizing practical skills for data-driven decision-making across industries.",
      download: ""
    },
    {
      id: 19,
      title: "Stock Market",
      course_desc: "The Stock Market course provides an in-depth understanding of financial markets.",
      objective: (
        <>
          The primary objective of the stock market is to facilitate the buying and selling of securities (such as stocks and bonds) between investors, providing a platform for capital raising and wealth accumulation through investments in publicly traded companies.<b></b>
          The primary objective of the stock market is to provide liquidity, price discovery, and capital formation, enabling investors to buy and sell securities efficiently, while companies can raise funds for growth and expansion through the sale of stocks.
        </>
      ),
      eligibility: "Eligibility for a stock market course typically requires a basic understanding of finance, economics, and a high school diploma or equivalent.",
      course_outline: stockmarket,
      check_curriculum: "The stock market course curriculum includes basics of financial markets, stock analysis techniques, portfolio management strategies, trading tactics, and regulatory considerations. Students learn to understand, analyze, and engage in stock market activities efficiently.",
      download: "https://drive.google.com/uc?export=download&id=1XCagl1RmZFtQk0-W1blBU6S9yqCeq1Qb"
    },
    {
      id: 20,
      title: "Internet Of Things",
      course_desc: "IoT devices gather data from their surroundings through sensors and other means.",
      objective: (
        <>
          The primary objective of the Internet of Things (IoT) is to enable everyday objects and devices to connect to the internet, allowing them to collect, exchange, and analyze data. By connecting physical objects to the digital world, IoT aims to create smarter, more efficient systems that can improve various aspects of life and business.
        </>
      ),
      eligibility: "Eligibility for an Internet of Things course typically requires a relevant educational background in fields like computer science or engineering, along with a basic understanding of programming and technical concepts.",
      course_outline: iot,
      check_curriculum: "An IoT curriculum typically includes topics such as IoT architecture, embedded systems, networking protocols (Wi-Fi, Bluetooth, etc.), data analytics, security and privacy, cloud and edge computing, machine learning, IoT applications (smart cities, healthcare, etc.), and hands-on projects.",
      download: "https://drive.google.com/uc?export=download&id=1GrAmmQ0tOGCP6PMUqOTo_c41CysCldpr"
    },
    {
      id: 21,
      title: "Nanoscience/Nanotechnology",
      course_desc: "This course provides an introduction to the fundamental principles and applications of nanoscience, focusing on the behavior of materials and systems at the nanoscale",
      objective: (
        <>
          The primary objective of nanoscience and nanotechnology is to understand, manipulate, and utilize matter at the nanoscale (typically ranging from 1 to 100 nanometers) to develop innovative materials, devices, and systems with unique properties and functionalities. This interdisciplinary field aims to revolutionize various industries, including electronics, medicine, energy, and materials science, by exploiting the novel physical, chemical, and biological phenomena that occur at the nanoscale.
        </>
      ),
      eligibility: "Eligibility for Nanoscience/Nanotechnology internships or courses typically requires candidates to have a background in fields like physics, chemistry, materials science, engineering, or biology. Candidates should have a good academic standing and may need to meet specific GPA requirements.",
      course_outline: nanoscience,
      check_curriculum: "The curriculum for a Nanoscience/Nanotechnology internship course typically covers fundamental concepts such as nanomaterial synthesis, characterization methods, nanofabrication techniques, nanodevices, nanobiotechnology applications.",
      download: "https://drive.google.com/uc?export=download&id=1RqLqdu3kLbztBwwQoRnci_4PLeNu4hBU"
    },
    {
      id: 22,
      title: "Construction Planning",
      course_desc: "This course provides an introduction to the fundamental principles and applications of nanoscience, focusing on the behavior of materials and systems at the nanoscale",
      objective: (
        <>
          The primary objective of nanoscience and nanotechnology is to understand, manipulate, and utilize matter at the nanoscale (typically ranging from 1 to 100 nanometers) to develop innovative materials, devices, and systems with unique properties and functionalities. This interdisciplinary field aims to revolutionize various industries, including electronics, medicine, energy, and materials science, by exploiting the novel physical, chemical, and biological phenomena that occur at the nanoscale.
        </>
      ),
      eligibility: "Eligibility for Nanoscience/Nanotechnology internships or courses typically requires candidates to have a background in fields like physics, chemistry, materials science, engineering, or biology. Candidates should have a good academic standing and may need to meet specific GPA requirements.",
      course_outline: nanoscience,
      check_curriculum: "The curriculum for a Nanoscience/Nanotechnology internship course typically covers fundamental concepts such as nanomaterial synthesis, characterization methods, nanofabrication techniques, nanodevices, nanobiotechnology applications.",
      download: "https://drive.google.com/uc?export=download&id=15jARgCpG-p4FL3us_acshpQh1DE7Bkqp"
    },
    {
      id: 23,
      title: "Data Science",
      course_desc: "Data science utilizes statistical and computational methods to analyze data, uncover patterns, and derive actionable insights for businesses and organizations.",
      objective: (
        <>
          The primary objective of data science is to leverage data to extract valuable insights, make accurate predictions, optimize processes, and enhance decision-making across various domains. By utilizing advanced analytical techniques, statistical models, and machine learning algorithms, data science aims to uncover hidden patterns, trends, and correlations within large datasets. This enables businesses and organizations to gain a competitive edge, improve operational efficiency, personalize experiences for users, detect anomalies or fraud, and ultimately drive innovation and growth. Data science plays a crucial role in transforming raw data into actionable knowledge that fuels informed decisions and strategic initiatives, leading to tangible benefits and value creation in today's data-driven world.
        </>
      ),
      eligibility: "Eligibility for data science roles typically requires a solid background in mathematics, statistics, and programming languages such as Python, R, or SQL. A bachelor's degree in computer science, mathematics, statistics, engineering, or a related field is commonly sought after for entry-level positions. Advanced roles in data science often necessitate a master's degree or Ph.D. in data science, machine learning, or a related discipline, coupled with relevant work experience in data analytics, machine learning algorithms, data visualization, and big data technologies. Proficiency in data manipulation, statistical modeling, and machine learning frameworks is highly valued in the field of data science.",
      course_outline: datascience,
      check_curriculum: "A data science curriculum for a website typically encompasses several key areas. It begins with an introduction to the field, covering the basics of data and its significance in modern contexts. ",
      download: "https://drive.google.com/uc?export=download&id=1cJUIB635DhvZC8pho7mi1K9o5-q_DPbf"
    }
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);


  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/AllEmployee" /> : <Login />} />
        <Route path="/AllEmployee" element={
          !user && !loading ? <Navigate to="/login" /> :
            (loading ? <Preloader /> : <div>
              <AllEmployee />
            </div>) 

        } />
        <Route path='/Upload' element={<Upload />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/allemployee' element={<AllEmployee />} />
        <Route path='/about' element={<About />} />
        <Route path='/TermsCondition' element={<TermsCondition />} />
        <Route path='/FaqPage' element={<FaqPage />} />
        <Route path='/Privacy' element={<Privacy />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AllDeparts' element={<AllDeparts />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/checkcertificate' element={<Checkcertificate />} />
        <Route path='/career' element={<Career />} />
        <Route path='/campusAmb' element={<CampusAmb />} />
        <Route path='/computerscience' element={<CSE />} />
        <Route path='/ece' element={<ECE />} />
        <Route path='/civil' element={<Civil />} />
        <Route path='/mechanical' element={<Mechanical />} />
        <Route path='/management' element={<Management />} />
        <Route path='/biotechnology' element={<BioTechnology />} />
        <Route path='/refundpolicy' element={<Refundpolicy />} />
        <Route path='/obform' element={<ObForm enteredEmail={enteredEmail} setEnteredEmail={setEnteredEmail} />} />
        <Route path='/Openform' element={<Openform enteredEmail={enteredEmail} setEnteredEmail={setEnteredEmail} />} />
        <Route path='/projectsubmission' element={<Projectsubmission enteredEmail={enteredEmail} setEnteredEmail={setEnteredEmail} />} />
        <Route path='/project' element={<Project enteredEmail={enteredEmail} setEnteredEmail={setEnteredEmail} />} />
        <Route path='/Preloader' element={<Preloader />} />
        <Route path='/PointConfetti' element={<PointConfetti />} />
        <Route path='/computerscience/appdevelopment' element={<Dev
          title={PropsDetails[0].title}
          course_desc={PropsDetails[0].course_desc}
          objective={PropsDetails[0].objective}
          eligibility={PropsDetails[0].eligibility}
          course_outline={PropsDetails[0].course_outline}
          check_curriculum={PropsDetails[0].check_curriculum}
          download={PropsDetails[0].download}
        />
        } />
        <Route path='/computerscience/webdevelopment' element={<Dev
          title={PropsDetails[1].title}
          course_desc={PropsDetails[1].course_desc}
          objective={PropsDetails[1].objective}
          eligibility={PropsDetails[1].eligibility}
          course_outline={PropsDetails[1].course_outline}
          check_curriculum={PropsDetails[1].check_curriculum}
          download={PropsDetails[1].download}
        />} />
        <Route path='/computerscience/cybersecurity' element={<Dev
          title={PropsDetails[2].title}
          course_desc={PropsDetails[2].course_desc}
          objective={PropsDetails[2].objective}
          eligibility={PropsDetails[2].eligibility}
          course_outline={PropsDetails[2].course_outline}
          check_curriculum={PropsDetails[2].check_curriculum}
          download={PropsDetails[2].download}
        />} />
        <Route path='/management/digitalmarketing' element={<Dev
          title={PropsDetails[3].title}
          course_desc={PropsDetails[3].course_desc}
          objective={PropsDetails[3].objective}
          eligibility={PropsDetails[3].eligibility}
          course_outline={PropsDetails[3].course_outline}
          check_curriculum={PropsDetails[3].check_curriculum}
          download={PropsDetails[3].download}
        />} />
        <Route path='/management/marketingmanagement' element={<Dev
          title={PropsDetails[4].title}
          course_desc={PropsDetails[4].course_desc}
          objective={PropsDetails[4].objective}
          eligibility={PropsDetails[4].eligibility}
          course_outline={PropsDetails[4].course_outline}
          check_curriculum={PropsDetails[4].check_curriculum}
          download={PropsDetails[4].download}
        />} />
        <Route path='/management/finance' element={<Dev
          title={PropsDetails[5].title}
          course_desc={PropsDetails[5].course_desc}
          objective={PropsDetails[5].objective}
          eligibility={PropsDetails[5].eligibility}
          course_outline={PropsDetails[5].course_outline}
          check_curriculum={PropsDetails[5].check_curriculum}
          download={PropsDetails[5].download}
        />} />
        <Route path='/management/hr' element={<Dev
          title={PropsDetails[6].title}
          course_desc={PropsDetails[6].course_desc}
          objective={PropsDetails[6].objective}
          eligibility={PropsDetails[6].eligibility}
          course_outline={PropsDetails[6].course_outline}
          check_curriculum={PropsDetails[6].check_curriculum}
          download={PropsDetails[6].download}
        />} />
        <Route path='/civil/autocad' element={<Dev
          title={PropsDetails[7].title}
          course_desc={PropsDetails[7].course_desc}
          objective={PropsDetails[7].objective}
          eligibility={PropsDetails[7].eligibility}
          course_outline={PropsDetails[7].course_outline}
          check_curriculum={PropsDetails[7].check_curriculum}
          download={PropsDetails[7].download}
        />} />
        <Route path='/civil/staadpro' element={<Dev
          title={PropsDetails[8].title}
          course_desc={PropsDetails[8].course_desc}
          objective={PropsDetails[8].objective}
          eligibility={PropsDetails[8].eligibility}
          course_outline={PropsDetails[8].course_outline}
          check_curriculum={PropsDetails[8].check_curriculum}
          download={PropsDetails[8].download}
        />} />
        <Route path='/computerscience/aws' element={<Dev
          title={PropsDetails[9].title}
          course_desc={PropsDetails[9].course_desc}
          objective={PropsDetails[9].objective}
          eligibility={PropsDetails[9].eligibility}
          course_outline={PropsDetails[9].course_outline}
          check_curriculum={PropsDetails[9].check_curriculum}
          download={PropsDetails[9].download}
        />} />
        <Route path='/computerscience/cloudcomputing' element={<Dev
          title={PropsDetails[9].title}
          course_desc={PropsDetails[9].course_desc}
          objective={PropsDetails[9].objective}
          eligibility={PropsDetails[9].eligibility}
          course_outline={PropsDetails[9].course_outline}
          check_curriculum={PropsDetails[9].check_curriculum}
          download={PropsDetails[9].download}
        />} />
        <Route path='/ece/vlsi' element={<Dev
          title={PropsDetails[10].title}
          course_desc={PropsDetails[10].course_desc}
          objective={PropsDetails[10].objective}
          eligibility={PropsDetails[10].eligibility}
          course_outline={PropsDetails[10].course_outline}
          check_curriculum={PropsDetails[10].check_curriculum}
          download={PropsDetails[10].download}
        />} />
        <Route path='/biotechnology/bioinformatics' element={<Dev
          title={PropsDetails[11].title}
          course_desc={PropsDetails[11].course_desc}
          objective={PropsDetails[11].objective}
          eligibility={PropsDetails[11].eligibility}
          course_outline={PropsDetails[11].course_outline}
          check_curriculum={PropsDetails[11].check_curriculum}
          download={PropsDetails[11].download}
        />} />
        <Route path='/ece/robotics' element={<Dev
          title={PropsDetails[12].title}
          course_desc={PropsDetails[12].course_desc}
          objective={PropsDetails[12].objective}
          eligibility={PropsDetails[12].eligibility}
          course_outline={PropsDetails[12].course_outline}
          check_curriculum={PropsDetails[12].check_curriculum}
          download={PropsDetails[12].download}
        />} />
        <Route path='/biotechnology/geneticengineering' element={<Dev
          title={PropsDetails[13].title}
          course_desc={PropsDetails[13].course_desc}
          objective={PropsDetails[13].objective}
          eligibility={PropsDetails[13].eligibility}
          course_outline={PropsDetails[13].course_outline}
          check_curriculum={PropsDetails[13].check_curriculum}
          download={PropsDetails[13].download}
        />} />
        <Route path='/computerscience/machinelearning' element={<Dev
          title={PropsDetails[14].title}
          course_desc={PropsDetails[14].course_desc}
          objective={PropsDetails[14].objective}
          eligibility={PropsDetails[14].eligibility}
          course_outline={PropsDetails[14].course_outline}
          check_curriculum={PropsDetails[14].check_curriculum}
          download={PropsDetails[14].download}
        />} />
        <Route path='/computerscience/artificialintelligence' element={<Dev
          title={PropsDetails[15].title}
          course_desc={PropsDetails[15].course_desc}
          objective={PropsDetails[15].objective}
          eligibility={PropsDetails[15].eligibility}
          course_outline={PropsDetails[15].course_outline}
          check_curriculum={PropsDetails[15].check_curriculum}
          download={PropsDetails[15].download}
        />} />
        <Route path='/computerscience/arvr' element={<Dev
          title={PropsDetails[16].title}
          course_desc={PropsDetails[16].course_desc}
          objective={PropsDetails[16].objective}
          eligibility={PropsDetails[16].eligibility}
          course_outline={PropsDetails[16].course_outline}
          check_curriculum={PropsDetails[16].check_curriculum}
          download={PropsDetails[16].download}
        />} />
        <Route path='/management/ba' element={<Dev
          title={PropsDetails[17].title}
          course_desc={PropsDetails[17].course_desc}
          objective={PropsDetails[17].objective}
          eligibility={PropsDetails[17].eligibility}
          course_outline={PropsDetails[17].course_outline}
          check_curriculum={PropsDetails[17].check_curriculum}
          download={PropsDetails[17].download}
        />} />
        <Route path='/management/stockmarket' element={<Dev
          title={PropsDetails[18].title}
          course_desc={PropsDetails[18].course_desc}
          objective={PropsDetails[18].objective}
          eligibility={PropsDetails[18].eligibility}
          course_outline={PropsDetails[18].course_outline}
          check_curriculum={PropsDetails[18].check_curriculum}
          download={PropsDetails[18].download}
        />} />
        <Route path='/ece/iot' element={<Dev
          title={PropsDetails[19].title}
          course_desc={PropsDetails[19].course_desc}
          objective={PropsDetails[19].objective}
          eligibility={PropsDetails[19].eligibility}
          course_outline={PropsDetails[19].course_outline}
          check_curriculum={PropsDetails[19].check_curriculum}
          download={PropsDetails[19].download}
        />} />
        <Route path='/biotechnology/nanoscience' element={<Dev
          title={PropsDetails[20].title}
          course_desc={PropsDetails[20].course_desc}
          objective={PropsDetails[20].objective}
          eligibility={PropsDetails[20].eligibility}
          course_outline={PropsDetails[20].course_outline}
          check_curriculum={PropsDetails[20].check_curriculum}
          download={PropsDetails[20].download}
        />} />
        <Route path='/civil/cp' element={<Dev
          title={PropsDetails[21].title}
          course_desc={PropsDetails[21].course_desc}
          objective={PropsDetails[21].objective}
          eligibility={PropsDetails[21].eligibility}
          course_outline={PropsDetails[21].course_outline}
          check_curriculum={PropsDetails[21].check_curriculum}
          download={PropsDetails[21].download}
        />} />
        <Route path='/computerscience/datascience' element={<Dev
          title={PropsDetails[22].title}
          course_desc={PropsDetails[22].course_desc}
          objective={PropsDetails[22].objective}
          eligibility={PropsDetails[22].eligibility}
          course_outline={PropsDetails[22].course_outline}
          check_curriculum={PropsDetails[22].check_curriculum}
          download={PropsDetails[22].download}
        />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
