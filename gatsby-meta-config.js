module.exports = {
  title: `jinmyeongan.github.io/`,
  description: `Jimmy의 개발여행`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://jinmyeongan.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `jinmyeongAN/jinmyeongAN.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `안진명`,
    bio: {
      role: `개발자`,
      description: ['이로운 것을 만드는', '나의 일을 사랑하는', '함께 나아가고 싶은'],
      thumbnail: '/JM.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/jinmyeongAN`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/jinmyeong-an-046b1416a/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `jinmyeong.an@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2016.03 ~ 2022.08',
        activity: '울산과학기술원 (UNIST)',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2019.01 ~ 2019.05',
        activity: 'UNIVERSITY OF CALIFORNIA, BERKELEY (EXCHANGE STUDENT, STARTUP SEMESTER)',
        links: {
          post: 'https://drive.google.com/file/d/1mypwKRe9x-rFOvPRm-AZzoK8hECOPFYq/view?usp=sharing',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.08 ~ 2022.02',
        activity: 'NAVER INTERN(Front-End) - 네이버 플레이스검색서비스개발 팀',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2022.09 ~ 2023.02',
        activity: 'NAVER BoostCamp AI Tech - NLP 과정',
        links: {
          post: 'https://earthcodinglab.github.io/landing-page/',
          github: 'https://github.com/boostcampaitech4lv23nlp2/final-project-level3-nlp-09',
          demo: 'https://github.com/boostcampaitech4lv23nlp2/final-project-level3-nlp-09',
        },
      },
      {
        date: '2023.02 ~ ',
        activity: 'POSTECH NLP lab',
        links: {
          post: 'https://nlp.postech.ac.kr/',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
