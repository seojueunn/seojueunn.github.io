module.exports = {
  title: `seojueunn.com`,
  description: `행복한 공대생의 기록`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.seojueunn.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `JUEUN`,
    bio: {
      role: `공대생`,
      description: ['사람에 가치를 두는', '배움을 좋아하는', '이로운 것을 만드는'],
      thumbnail: 'me.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/seojueunn`,
      linkedIn: ``,
      email: `seojueunn@gmail.com`,
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
        date: '2020.03 ~ ing',
        activity: 'Artificial Intelligence・Computer Science and Engineering',
      },
      {
        date: '2021.06 ~ 2023.06',
        activity: 'Intelligent Software Engineering Lab 학부 연구생',
      },
      {
        date: '2021.09 ~ 2021.12',
        activity: '글로벌리더십학부 "파이썬 프로그래밍" Teaching Assistant',
      },
      {
        date: '2022.01 ~ 2022.08',
        activity: 'jChecker 1.0 채점 엔진 분석 & 유지 보수',
        links: {
          github: 'https://github.com/ISEL-HGU/jChecker-Engine.git',
          demo: 'http://isel.lifove.net/jchecker',
        },
      },
      {
        date: '2022.03 ~ 2022.06',
        activity: '전산전자공학부 "Java Programming" Teaching Assistant',
      },
      {
        date: '2022.07',
        activity: '객체 지향 프로그램 자동 평가 시스템, in Proceedings of Korea Computer Congress (KCC2022)',
        links: {
          post: 'https://www.eiric.or.kr/literature/ser_view.php?SnxGubun=INME&mode=total&searchCate=literature&literature=Y&more=Y&research=Y&gu=INME000G4&cmd=qryview&SnxIndxNum=245374&q1_yy=2022&q1_mm=06&rownum=2&totalCnt=4&q1_t=SmFlY2hhbmcgTmFt&listUrl=L2xpdGVyYXR1cmUvcmVzdWx0LnBocD9TbnhHdWJ1bj1JTk1FJm1vZGU9dG90YWwmc2VhcmNoQ2F0ZT1saXRlcmF0dXJlJmxpdGVyYXR1cmU9WSZxMT1KYWVjaGFuZyUyME5hbSZtb3JlPVkmZjE9TU4mcmVzZWFyY2g9WQ==&f1=MN&q1=Jaechang%20Nam',
        },
      },
      {
        date: '2022.09 ~ 2022.12',
        activity: '전산전자공학부 "컴퓨터구조" Teaching Assistant',
      },
      {
        date: '2023.01 ~ 2023.07',
        activity: 'jChecker 2.0 개발 & 캡스톤 페스티벌 수상',
        links: {
          github: 'https://github.com/ISEL-HGU/jChecker-Engine.git',
          demo: 'http://isel.lifove.net/jchecker2.0',
        },
      },
      {
        date: '2023.02',
        activity: '프로그래밍 교육을 위한 지능형 튜터링 시스템 문헌 조사, in Proceedings of Korea Conference on Software Engineering (KCSE2023) ',
        links: {
          post: 'http://sigsoft.or.kr/kcse2023/',
        },
      },
      {
        date: '2023.03 ~ 2022.06',
        activity: '전산전자공학부 "알고리듬 분석" & "자바 프로그래밍 언어" Teaching Assistant',
      },
      {
        date: '2023.09 ~ ing',
        activity: '전산전자공학부 "컴퓨터구조" Teaching Assistant',
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
        title: '함께 쓰는 다이어리 프로그램 개발',
        description:
          '애플리케이션을 통해 소중한 사람들과 일기장을 공유하여 일상을 함께 할 수 있는 서비스를 제공합니다. "최고심" 일러스트를 사용하여 전체적인 컨셉을 디자인 하였습니다. 일기장 이름과 비밀번호를 공유한 특정 사용자에게만 다이어리를 공개하며, 사용자가 직접 커스텀 할 수 있도록 하여 "나만의 일기장"이라는 느낌을 주고자 하였습니다.',
        techStack: ['flutter', 'firebase'],
        thumbnailUrl: 'yijueun.png',
        links: {
          github: 'https://github.com/seojueunn/YIJUEUN',
        },
      },
      {
        title: 'Java 프로그래밍 교육을 위한 지능형 튜터링 시스템 개발',
        description:
            '컴퓨터공학을 전공하면서 프로그래밍 교육에 도움을 주는 목적의 다양한 채점 서비스에 관심을 갖게 되었습니다. 약 12개의 객체 지향 개념을 자동으로 평가할 수 있는 채점 프로그램을 웹 서비스 형태로 개발하였습니다. 제출된 프로그램을 컴파일 및 실행하여 테스트 케이스 통과 여부를 확인하며, 프로그램의 구조를 분석하여 객체 지향 개념을 시각화한 클래스 다이어그램을 제공합니다.',
        techStack: ['java', 'gradle', 'react'],
        thumbnailUrl: 'jChecker.png',
        links: {
          github: 'https://github.com/ISEL-HGU/jChecker-Engine.git',
          demo: 'http://isel.lifove.net/jchecker2.0',
        },
      },
    ],
  },
};
