import { Course } from '../types';

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Algebra Made Easy: Foundations to Mastery',
    subject: 'Mathematics',
    level: 'High School',
    mode: 'Live',
    price: 49,
    tutorId: 'tutor-1',
    tutorName: 'Dr. Marcus Vance',
    tutorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviewsCount: 88,
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    description: 'Master core algebraic concepts, linear equations, quadratic functions, and problem-solving techniques through weekly interactive 1-on-1 and small group live problem sets.',
    duration: '6 Weeks (12 Sessions)',
    lessonsCount: 6,
    enrolledStudentsCount: 142,
    lessons: [
      {
        id: 'l1',
        title: 'Lesson 1: Solving Linear Equations & Inequalities',
        duration: '45 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/algebra-lesson1-notes.pdf',
        worksheetUrl: '/resources/algebra-lesson1-worksheet.pdf',
        description: 'Introduction to single-variable linear equations and absolute value inequalities.'
      },
      {
        id: 'l2',
        title: 'Lesson 2: Graphing Functions & Slope Intercept Form',
        duration: '50 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: false,
        pdfUrl: '/resources/algebra-lesson2-notes.pdf',
        worksheetUrl: '/resources/algebra-lesson2-worksheet.pdf',
        description: 'Understanding slope, intercepts, parallel lines, and domain/range relationships.'
      },
      {
        id: 'l3',
        title: 'Lesson 3: Systems of Linear Equations',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/algebra-lesson3-notes.pdf',
        worksheetUrl: '/resources/algebra-lesson3-worksheet.pdf',
        description: 'Substitution, elimination methods, and practical word problem applications.'
      },
      {
        id: 'l4',
        title: 'Lesson 4: Polynomials & Factoring Shortcuts',
        duration: '55 mins',
        isPreview: false,
        pdfUrl: '/resources/algebra-lesson4-notes.pdf',
        worksheetUrl: '/resources/algebra-lesson4-worksheet.pdf',
        description: 'Factoring quadratics, difference of squares, and trinomial decomposition.'
      },
      {
        id: 'l5',
        title: 'Lesson 5: Quadratic Equations & The Formula',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/algebra-lesson5-notes.pdf',
        worksheetUrl: '/resources/algebra-lesson5-worksheet.pdf',
        description: 'Completing the square, using the discriminant, and vertex form transformations.'
      },
      {
        id: 'l6',
        title: 'Lesson 6: Rational Expressions & Final Review',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/algebra-lesson6-notes.pdf',
        worksheetUrl: '/resources/algebra-lesson6-worksheet.pdf',
        description: 'Simplifying algebraic fractions and comprehensive course exam prep.'
      }
    ]
  },
  {
    id: 'course-2',
    title: 'Intro to Python: Build 5 Real-World Projects',
    subject: 'Computer Science',
    level: 'High School',
    mode: 'Recorded',
    price: 59,
    tutorId: 'tutor-2',
    tutorName: 'Elena Rostova',
    tutorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 4.98,
    reviewsCount: 164,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    description: 'Learn Python programming from scratch. Write clean code, understand variables, control flow, functions, OOP, and build real projects like a Weather App and CLI Game.',
    duration: '8 Hours (Recorded Video)',
    lessonsCount: 5,
    enrolledStudentsCount: 310,
    lessons: [
      {
        id: 'p1',
        title: 'Python 101: Environment & Basics',
        duration: '40 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/python-ch1-cheatsheet.pdf',
        worksheetUrl: '/resources/python-ch1-exercises.pdf',
        description: 'Setting up VS Code, running your first Python script, data types & variables.'
      },
      {
        id: 'p2',
        title: 'Control Structures & Loop Magic',
        duration: '50 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: false,
        pdfUrl: '/resources/python-ch2-notes.pdf',
        worksheetUrl: '/resources/python-ch2-exercises.pdf',
        description: 'If-else branching, for loops, while loops, and list comprehensions.'
      },
      {
        id: 'p3',
        title: 'Functions & Data Structures',
        duration: '55 mins',
        isPreview: false,
        pdfUrl: '/resources/python-ch3-notes.pdf',
        worksheetUrl: '/resources/python-ch3-exercises.pdf',
        description: 'Writing reusable functions, dictionaries, sets, tuples, and error handling.'
      },
      {
        id: 'p4',
        title: 'Object-Oriented Programming (OOP)',
        duration: '65 mins',
        isPreview: false,
        pdfUrl: '/resources/python-ch4-notes.pdf',
        worksheetUrl: '/resources/python-ch4-exercises.pdf',
        description: 'Classes, objects, inheritance, encapsulation, and clean software architecture.'
      },
      {
        id: 'p5',
        title: 'Capstone Project: CLI Weather & Task Manager',
        duration: '75 mins',
        isPreview: false,
        pdfUrl: '/resources/python-capstone-guide.pdf',
        worksheetUrl: '/resources/python-capstone-starter.zip',
        description: 'Fetching live web API data using requests and building a full terminal tool.'
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Creative Writing for Teens: Crafting Compelling Stories',
    subject: 'English & Writing',
    level: 'High School',
    mode: 'Live',
    price: 39,
    tutorId: 'tutor-3',
    tutorName: 'Sarah Jenkins',
    tutorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 4.87,
    reviewsCount: 62,
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    description: 'Unlock your creative voice! Learn character building, world design, dynamic dialogue, and plot structure with live feedback on your original stories.',
    duration: '4 Weeks (8 Live Workshops)',
    lessonsCount: 4,
    enrolledStudentsCount: 95,
    lessons: [
      {
        id: 'c1',
        title: 'Module 1: Building Unforgettable Characters',
        duration: '50 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/writing-character-sheet.pdf',
        description: 'Flaws, desires, inner conflicts, and voice development for fiction leads.'
      },
      {
        id: 'c2',
        title: 'Module 2: Worldbuilding & Atmosphere',
        duration: '50 mins',
        isPreview: false,
        pdfUrl: '/resources/writing-worldbuilding.pdf',
        description: 'Sensory details, setting mood, and showing vs telling.'
      },
      {
        id: 'c3',
        title: 'Module 3: Pacing, Dialogue & Conflict',
        duration: '50 mins',
        isPreview: false,
        pdfUrl: '/resources/writing-dialogue-guide.pdf',
        description: 'Writing natural dialogue subtext and managing narrative tension.'
      },
      {
        id: 'c4',
        title: 'Module 4: Editing, Polishing & Publishing Basics',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/writing-publishing-guide.pdf',
        description: 'Self-editing strategies, line edits, and submitting to youth literary magazines.'
      }
    ]
  },
  {
    id: 'course-4',
    title: 'IGCSE Physics: Fundamental Principles & Exam Prep',
    subject: 'Science',
    level: 'High School',
    mode: 'Recorded',
    price: 54,
    tutorId: 'tutor-4',
    tutorName: 'Prof. David Chen',
    tutorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.93,
    reviewsCount: 110,
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive coverage of IGCSE/GCSE Physics syllabus: Mechanics, Thermal Physics, Waves, Electricity, and Atomic Physics with step-by-step past paper walkthroughs.',
    duration: '10 Hours (Recorded Video)',
    lessonsCount: 5,
    enrolledStudentsCount: 220,
    lessons: [
      {
        id: 'phy1',
        title: 'Unit 1: Motion, Forces & Energy',
        duration: '60 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/physics-unit1-formulas.pdf',
        worksheetUrl: '/resources/physics-unit1-problems.pdf',
        description: 'Speed, acceleration, Newton laws, kinetic and potential energy equations.'
      },
      {
        id: 'phy2',
        title: 'Unit 2: Thermal Physics & States of Matter',
        duration: '50 mins',
        isPreview: false,
        pdfUrl: '/resources/physics-unit2-notes.pdf',
        description: 'Specific heat capacity, conduction, convection, radiation, and gas laws.'
      },
      {
        id: 'phy3',
        title: 'Unit 3: Waves, Light & Sound',
        duration: '55 mins',
        isPreview: false,
        pdfUrl: '/resources/physics-unit3-notes.pdf',
        description: 'Reflection, refraction, total internal reflection, electromagnetic spectrum.'
      },
      {
        id: 'phy4',
        title: 'Unit 4: Electricity & Magnetism',
        duration: '65 mins',
        isPreview: false,
        pdfUrl: '/resources/physics-unit4-notes.pdf',
        description: 'Current, voltage, Ohm law, series/parallel circuits, electromagnetic induction.'
      },
      {
        id: 'phy5',
        title: 'Unit 5: Nuclear Physics & Past Paper Blitz',
        duration: '70 mins',
        isPreview: false,
        pdfUrl: '/resources/physics-past-papers-solved.pdf',
        description: 'Alpha/beta/gamma radiation, half-life calculations, and exam techniques.'
      }
    ]
  },
  {
    id: 'course-5',
    title: 'SAT Math Prep: 800 Score Strategy Masterclass',
    subject: 'Test Prep',
    level: 'High School',
    mode: 'Live',
    price: 69,
    tutorId: 'tutor-5',
    tutorName: 'Amara Diop',
    tutorAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200',
    rating: 4.97,
    reviewsCount: 195,
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    description: 'Target a top 1% SAT Math score! Learn fast elimination techniques, Desmos calculator shortcuts, high-frequency problem types, and timed test-taking tactics.',
    duration: '5 Weeks (Live Boot Camp)',
    lessonsCount: 5,
    enrolledStudentsCount: 380,
    lessons: [
      {
        id: 'sat1',
        title: 'Heart of Algebra & Fast Solving Techniques',
        duration: '60 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/sat-algebra-cheatsheet.pdf',
        worksheetUrl: '/resources/sat-algebra-test.pdf',
        description: 'Tackling complex linear systems, plug-in value tactics, and trap answers.'
      },
      {
        id: 'sat2',
        title: 'Problem Solving & Data Analysis',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/sat-data-notes.pdf',
        description: 'Ratios, percentages, statistics, standard deviation, and graph interpretation.'
      },
      {
        id: 'sat3',
        title: 'Passport to Advanced Math & Quadratics',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/sat-advmath-notes.pdf',
        description: 'Exponents, radicals, rational functions, and polynomial transformations.'
      },
      {
        id: 'sat4',
        title: 'Additional Topics in Math: Geometry & Trig',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/sat-geom-notes.pdf',
        description: 'Circle equations, arc lengths, radian conversions, and right triangle trigonometry.'
      },
      {
        id: 'sat5',
        title: 'Full Practice Test Diagnostic & Live Error Analysis',
        duration: '75 mins',
        isPreview: false,
        pdfUrl: '/resources/sat-full-diagnostic-sol.pdf',
        description: 'Real exam simulation analysis with individualized pacing strategies.'
      }
    ]
  },
  {
    id: 'course-6',
    title: 'Spoken English & Public Speaking Confidence',
    subject: 'Languages',
    level: 'Primary',
    mode: 'Live',
    price: 35,
    tutorId: 'tutor-6',
    tutorName: 'Lucas Rossi',
    tutorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 4.88,
    reviewsCount: 74,
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    description: 'Overcome fear of speaking! Small group live sessions designed to boost pronunciation, vocabulary expansion, active listening, and impromptu presentation skills.',
    duration: '4 Weeks (8 Live Interactive Sessions)',
    lessonsCount: 4,
    enrolledStudentsCount: 130,
    lessons: [
      {
        id: 'eng1',
        title: 'Break the Ice: Confident Introductions',
        duration: '45 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/english-intros.pdf',
        description: 'Natural phrasing, greeting etiquettes, and overcoming speech anxiety.'
      },
      {
        id: 'eng2',
        title: 'Mastering Pronunciation & Intonation',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/english-phonetics.pdf',
        description: 'Vowel sounds, word stress, rhythm, and sentence connections.'
      },
      {
        id: 'eng3',
        title: 'Storytelling & Expressing Opinions',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/english-storytelling.pdf',
        description: 'Structuring short stories, transition words, and persuasive phrases.'
      },
      {
        id: 'eng4',
        title: 'Live Impromptu Speeches & Showcase',
        duration: '55 mins',
        isPreview: false,
        pdfUrl: '/resources/english-showcase-rubric.pdf',
        description: 'Delivering 2-minute talks with constructive peer feedback.'
      }
    ]
  },
  {
    id: 'course-7',
    title: 'Primary School Math Foundations (Grades 3-5)',
    subject: 'Mathematics',
    level: 'Primary',
    mode: 'Recorded',
    price: 29,
    tutorId: 'tutor-1',
    tutorName: 'Dr. Marcus Vance',
    tutorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 4.92,
    reviewsCount: 51,
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    description: 'Fun, visual, and engaging math foundation lessons covering fractions, decimals, basic geometry, and mental math tricks for young learners.',
    duration: '5 Hours (Recorded Video)',
    lessonsCount: 4,
    enrolledStudentsCount: 165,
    lessons: [
      {
        id: 'pm1',
        title: 'Visual Fractions & Equivalent Models',
        duration: '35 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/primary-fractions.pdf',
        description: 'Pizza slice models for understanding denominators and numerators.'
      },
      {
        id: 'pm2',
        title: 'Decimals & Money Math',
        duration: '40 mins',
        isPreview: false,
        pdfUrl: '/resources/primary-decimals.pdf',
        description: 'Connecting fractions to decimal points and counting change.'
      },
      {
        id: 'pm3',
        title: 'Shapes, Perimeter & Area',
        duration: '40 mins',
        isPreview: false,
        pdfUrl: '/resources/primary-geometry.pdf',
        description: '2D and 3D shape properties with hands-on measuring activities.'
      },
      {
        id: 'pm4',
        title: 'Mental Math Superpower Tricks',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/primary-mentalmath.pdf',
        description: 'Speed multiplication, rounding tricks, and estimation habits.'
      }
    ]
  },
  {
    id: 'course-8',
    title: 'AP Chemistry: Reaction Kinetics & Equilibrium',
    subject: 'Chemistry & Biology',
    level: 'College',
    mode: 'Live',
    price: 75,
    tutorId: 'tutor-4',
    tutorName: 'Prof. David Chen',
    tutorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.96,
    reviewsCount: 82,
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced college-prep chemistry focusing on Le Chatelier principle, rate laws, thermodynamics, electrochemistry, and AP free-response problem sets.',
    duration: '6 Weeks (12 Live Sessions)',
    lessonsCount: 4,
    enrolledStudentsCount: 110,
    lessons: [
      {
        id: 'apc1',
        title: 'Chemical Kinetics & Reaction Rates',
        duration: '60 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/apchem-kinetics.pdf',
        description: 'Differential rate laws, integrated rate laws, and half-life derivations.'
      },
      {
        id: 'apc2',
        title: 'Chemical Equilibrium & Keq Calculations',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/apchem-equilibrium.pdf',
        description: 'ICE tables, reaction quotient Q, and Le Chatelier shifts.'
      },
      {
        id: 'apc3',
        title: 'Acid-Base Equilibria & Buffers',
        duration: '65 mins',
        isPreview: false,
        pdfUrl: '/resources/apchem-acidbase.pdf',
        description: 'pH, pKa, Henderson-Hasselbalch equation, and titration curves.'
      },
      {
        id: 'apc4',
        title: 'Thermodynamics & Electrochemistry',
        duration: '65 mins',
        isPreview: false,
        pdfUrl: '/resources/apchem-thermo.pdf',
        description: 'Entropy, Gibbs free energy, galvanic cells, and Nernst equation.'
      }
    ]
  },
  {
    id: 'course-9',
    title: 'Full-Stack Web Dev with React & Node.js',
    subject: 'Computer Science',
    level: 'College',
    mode: 'Recorded',
    price: 65,
    tutorId: 'tutor-2',
    tutorName: 'Elena Rostova',
    tutorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 4.99,
    reviewsCount: 205,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    description: 'Build production-ready web applications! Learn modern React components, REST APIs, Express backend, MongoDB/PostgreSQL database wiring, and deployment on Vercel.',
    duration: '12 Hours (Recorded Video)',
    lessonsCount: 5,
    enrolledStudentsCount: 420,
    lessons: [
      {
        id: 'web1',
        title: 'React Fundamentals & Component Architecture',
        duration: '60 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/react-cheatsheet.pdf',
        description: 'JSX, props, state, hooks (useState, useEffect), and virtual DOM.'
      },
      {
        id: 'web2',
        title: 'State Management with Zustand & Context API',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/react-state.pdf',
        description: 'Global state store architecture, middleware, and local storage persistence.'
      },
      {
        id: 'web3',
        title: 'Building RESTful APIs with Node & Express',
        duration: '70 mins',
        isPreview: false,
        pdfUrl: '/resources/express-guide.pdf',
        description: 'Routes, controllers, middleware, JSON responses, and error handlers.'
      },
      {
        id: 'web4',
        title: 'Database Integration & Authentication',
        duration: '75 mins',
        isPreview: false,
        pdfUrl: '/resources/auth-jwt-guide.pdf',
        description: 'JWT tokens, password hashing, database schemas, and CORS handling.'
      },
      {
        id: 'web5',
        title: 'Deploying & Connecting Headless CMS (Strapi/Sanity)',
        duration: '65 mins',
        isPreview: false,
        pdfUrl: '/resources/cms-integration.pdf',
        description: 'Connecting frontend clients to headless content management backends.'
      }
    ]
  },
  {
    id: 'course-10',
    title: 'Essay Writing Masterclass for College Admissions',
    subject: 'English & Writing',
    level: 'College',
    mode: 'Live',
    price: 49,
    tutorId: 'tutor-3',
    tutorName: 'Sarah Jenkins',
    tutorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 4.94,
    reviewsCount: 93,
    thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800',
    description: 'Craft a standout Personal Statement for Common App and UC prompts. Learn how to outline impactful narratives that capture admissions officers.',
    duration: '3 Weeks (6 Live Sessions)',
    lessonsCount: 3,
    enrolledStudentsCount: 155,
    lessons: [
      {
        id: 'ess1',
        title: 'Brainstorming Your Core Personal Story',
        duration: '50 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/college-essay-brainstorm.pdf',
        description: 'Uncovering authentic moments, values, and narrative arcs.'
      },
      {
        id: 'ess2',
        title: 'Drafting Hook Introductions & Showing Impact',
        duration: '55 mins',
        isPreview: false,
        pdfUrl: '/resources/college-essay-drafting.pdf',
        description: 'Writing magnetic opening lines and building vivid prose.'
      },
      {
        id: 'ess3',
        title: 'Line Editing & Supplemental Essay Strategy',
        duration: '60 mins',
        isPreview: false,
        pdfUrl: '/resources/college-essay-checklist.pdf',
        description: 'Word count trimming, active verbs, and tailored college responses.'
      }
    ]
  },
  {
    id: 'course-11',
    title: 'Spanish for Beginners: Practical Conversation',
    subject: 'Languages',
    level: 'High School',
    mode: 'Recorded',
    price: 35,
    tutorId: 'tutor-6',
    tutorName: 'Lucas Rossi',
    tutorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 4.85,
    reviewsCount: 46,
    thumbnail: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=800',
    description: 'Start speaking Spanish from day one! Practical dialogues, common verbs, travel vocabulary, and daily life phrases with audio pronunciation aids.',
    duration: '6 Hours (Recorded Video)',
    lessonsCount: 4,
    enrolledStudentsCount: 175,
    lessons: [
      {
        id: 'sp1',
        title: 'Saludos y Presentaciones (Greetings)',
        duration: '35 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/spanish-greetings.pdf',
        description: 'Basic introductions, alphabet, and essential polite phrases.'
      },
      {
        id: 'sp2',
        title: 'En el Restaurante y Compras (Ordering & Shopping)',
        duration: '40 mins',
        isPreview: false,
        pdfUrl: '/resources/spanish-shopping.pdf',
        description: 'Food terms, asking prices, and numbers 1 to 100.'
      },
      {
        id: 'sp3',
        title: 'Verbos Esenciales (Ser, Estar, Tener)',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/spanish-verbs.pdf',
        description: 'Mastering the fundamental auxiliary verbs in present tense.'
      },
      {
        id: 'sp4',
        title: 'Viajes y Direcciones (Travel & Navigation)',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/spanish-travel.pdf',
        description: 'Asking for directions, hotel check-ins, and transport phrases.'
      }
    ]
  },
  {
    id: 'course-12',
    title: 'Biology & Human Anatomy Fundamentals',
    subject: 'Chemistry & Biology',
    level: 'High School',
    mode: 'Recorded',
    price: 45,
    tutorId: 'tutor-4',
    tutorName: 'Prof. David Chen',
    tutorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.91,
    reviewsCount: 88,
    thumbnail: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800',
    description: 'Explore the human body systems, cellular biology, genetics, and ecology through animated 3D diagrams and bite-sized visual lessons.',
    duration: '7 Hours (Recorded Video)',
    lessonsCount: 4,
    enrolledStudentsCount: 205,
    lessons: [
      {
        id: 'bio1',
        title: 'Cellular Structure & Organelles',
        duration: '40 mins',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        isPreview: true,
        pdfUrl: '/resources/biology-cells.pdf',
        description: 'Mitochondria, cell membrane transport, and mitosis vs meiosis.'
      },
      {
        id: 'bio2',
        title: 'Human Circulatory & Respiratory Systems',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/biology-respiratory.pdf',
        description: 'Heart anatomy, blood vessels, gas exchange in alveoli.'
      },
      {
        id: 'bio3',
        title: 'Genetics, DNA & Inheritance',
        duration: '50 mins',
        isPreview: false,
        pdfUrl: '/resources/biology-genetics.pdf',
        description: 'Punnett squares, DNA replication, transcription, and translation.'
      },
      {
        id: 'bio4',
        title: 'Ecosystems & Biodiversity',
        duration: '45 mins',
        isPreview: false,
        pdfUrl: '/resources/biology-ecology.pdf',
        description: 'Food webs, nutrient cycles, and environmental conservation.'
      }
    ]
  }
];
