/**
 * =============================================================================
 *  Site content. This is the only file you need to edit for day-to-day updates.
 * =============================================================================
 *
 *  To add a paper      -> add an entry to `publications` (newest first).
 *  To add a news item  -> add an entry to `news` (newest first).
 *  To change your bio  -> edit `author.bio`.
 *
 *  Items marked TODO are placeholders you should verify or fill in.
 */

module.exports = {
  // ---------------------------------------------------------------- site meta
  title: `JinMyeong An`,
  description: `JinMyeong An is an AI engineer at Samsung Electronics (MX), working on agent planning for Bixby, with research in NLP, dialogue, and trustworthy language models.`,
  language: `en`,
  siteUrl: `https://jinmyeongan.github.io/`,
  ogImage: `/og-image.png`,

  comments: {
    utterances: {
      repo: `jinmyeongAN/jinmyeongAN.github.io`,
    },
  },

  ga: '0', // Google Analytics tracking ID

  // ------------------------------------------------------------------- author
  author: {
    name: `JinMyeong An`,
    nameLocal: `안진명`,
    position: `AI Engineer`,
    affiliation: `Samsung Electronics, Mobile eXperience (MX)`,
    affiliationUrl: `https://www.samsung.com/`,
    // Shown as a smaller second line under the affiliation.
    previously: `Previously: NLP Lab, POSTECH (M.S. 2025)`,
    // Place your photo at `assets/profile.jpg` (square crop, ~600x600 or larger).
    photo: `profile.jpg`,

    // Each string is rendered as its own paragraph.
    bio: [
      `I am an AI engineer in the Language AI Core R&amp;D group at Samsung Electronics, Mobile eXperience (MX), where I work on Bixby, the assistant that ships across Samsung's Galaxy devices. I received my M.S. in artificial intelligence from POSTECH, where I worked in the <a href="https://nlp.postech.ac.kr/" target="_blank" rel="noreferrer">NLP Lab</a> under <a href="https://scholar.google.com/citations?user=6dIhxxIAAAAJ" target="_blank" rel="noreferrer">Gary Geunbae Lee</a> and <a href="https://sites.google.com/view/jungseulok" target="_blank" rel="noreferrer">Jungseul Ok</a>. Before that I studied physics at UNIST.`,

      `<a href="https://news.samsung.com/global/interview-bixby-will-be-your-go-to-starting-point-for-every-samsung-device-meet-jisun-park-head-of-language-ai" target="_blank" rel="noreferrer">Bixby 4.0</a> was rebuilt around an LLM that plans over callable agents instead of matching commands, so a request becomes a sequence of tool calls composed across the device and, through SmartThings, across other devices. I work on that planning layer &mdash; turning an open-ended utterance into a plan the system can carry out reliably and legibly &mdash; and on evaluating and improving those plans so failures surface before users meet them. Working on a deployed multi-agent system is what convinced me that planning quality is an evaluation problem as much as a modeling one.`,

      `My research asks how conversational systems can be made dependable: recognizing harm while a conversation is still unfolding rather than after the fact, explaining the judgments they make, and staying robust to noisy input. My M.S. thesis reframed early detection of online grooming as a turn-level reinforcement learning problem, trading off how fast a system flags risk against how often it is right.`,

      `I am increasingly interested in what reasoning and multi-agent interaction change about that picture &mdash; when intermediate reasoning actually earns its cost, and how agents that talk to each other can be evaluated for safety rather than only for task success.`,
    ],

    social: {
      email: `jinmyeong.an@gmail.com`,
      scholar: `https://scholar.google.com/citations?hl=en&user=mw7OEEUAAAAJ`,
      github: `https://github.com/jinmyeongAN`,
      linkedIn: `https://www.linkedin.com/in/jinmyeong-an-046b1416a/`,
      // TODO: drop a PDF at `static/cv.pdf` and set this to `/cv.pdf`.
      cv: ``,
    },
  },

  // -------------------------------------------------------- research interests
  interests: [
    {
      title: `Safety in conversational AI`,
      description: `Detecting risk at the turn level so a system can intervene at the right moment, and measuring the speed/accuracy trade-off that intervention implies.`,
    },
    {
      title: `Speech and multimodal language processing`,
      description: `Explainable hate speech detection over audio, and correcting ASR errors on named entities without amplifying retrieval noise.`,
    },
    {
      title: `Reasoning, planning, and multi-agent LLMs`,
      description: `When intermediate reasoning genuinely helps, and how to evaluate agents that plan, call tools, and coordinate through language.`,
    },
  ],

  // ----------------------------------------------------------------------- news
  // Newest first. `date` is free text; keep it short.
  news: [
    {
      date: `May 2025`,
      description: `<em>DeRAGEC</em> accepted to Findings of ACL 2025.`,
    },
    {
      date: `Apr 2025`,
      description: `Presented <em>SCoRL</em> as an oral paper at NAACL 2025 in Albuquerque, New Mexico.`,
    },
    {
      date: `Mar 2025`,
      description: `Joined the Language AI team at Samsung Electronics (MX) as an AI engineer, working on Bixby.`,
    },
    {
      date: `Feb 2025`,
      description: `Completed my M.S. at POSTECH. Thesis: <em>Revisiting Early Detection of Sexual Predators via Turn-level Optimization</em>.`,
    },
    {
      date: `Sep 2024`,
      description: `Presented work on explainable audio hate speech detection at SIGDIAL 2024 in Kyoto.`,
    },
  ],

  // --------------------------------------------------------------- publications
  // Newest first. `authors` uses "*" to mark the site owner; the renderer bolds it.
  // `note` is for "Oral", "Spotlight", "Equal contribution", etc.
  publications: [
    {
      title: `DeRAGEC: Denoising Named Entity Candidates with Synthetic Rationale for ASR Error Correction`,
      authors: `Solee Im, Wonjun Lee, *JinMyeong An, Yunsu Kim, Jungseul Ok, Gary Geunbae Lee`,
      venue: `Findings of ACL`,
      year: `2025`,
      note: ``,
      selected: true,
      abstract: `A training-free framework that filters phonetically similar named-entity candidates for ASR error correction using synthetic rationales, reducing the noise that retrieval-augmented correction otherwise introduces.`,
      links: {
        paper: `https://aclanthology.org/2025.findings-acl.786/`,
        pdf: `https://aclanthology.org/2025.findings-acl.786.pdf`,
        arxiv: ``,
        code: ``,
        bibtex: `@inproceedings{im-etal-2025-deragec,
    title = "{D}e{RAGEC}: Denoising Named Entity Candidates with Synthetic Rationale for {ASR} Error Correction",
    author = "Im, Solee and Lee, Wonjun and An, JinMyeong and Kim, Yunsu and Ok, Jungseul and Lee, Gary Geunbae",
    booktitle = "Findings of the Association for Computational Linguistics: ACL 2025",
    year = "2025",
    pages = "15181--15193",
    url = "https://aclanthology.org/2025.findings-acl.786/"
}`,
      },
    },
    {
      title: `Revisiting Early Detection of Sexual Predators via Turn-level Optimization`,
      authors: `*JinMyeong An, Sangwon Ryu, Heejin Do, Yunsu Kim, Jungseul Ok, Gary Geunbae Lee`,
      venue: `NAACL`,
      year: `2025`,
      note: `Oral`,
      selected: true,
      abstract: `Online grooming unfolds gradually, so chat-level risk labels supervise it only weakly. We propose SCoRL, which uses turn-level risk labels derived from luring communication theory and a speed control reward that balances how early a system flags risk against how accurate that flag is.`,
      links: {
        paper: `https://aclanthology.org/2025.naacl-long.241/`,
        pdf: `https://aclanthology.org/2025.naacl-long.241.pdf`,
        arxiv: `https://arxiv.org/abs/2503.06627`,
        code: `https://github.com/jinmyeongAN/SCoRL`,
        bibtex: `@inproceedings{an-etal-2025-revisiting,
    title = "Revisiting Early Detection of Sexual Predators via Turn-level Optimization",
    author = "An, JinMyeong and Ryu, Sangwon and Do, Heejin and Kim, Yunsu and Ok, Jungseul and Lee, Gary Geunbae",
    booktitle = "Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)",
    year = "2025",
    pages = "4713--4724",
    url = "https://aclanthology.org/2025.naacl-long.241/"
}`,
      },
    },
    {
      title: `An Investigation into Explainable Audio Hate Speech Detection`,
      authors: `*JinMyeong An, Wonjun Lee, Yejin Jeon, Jungseul Ok, Yunsu Kim, Gary Geunbae Lee`,
      venue: `SIGDIAL`,
      year: `2024`,
      note: ``,
      selected: true,
      abstract: `Hate speech detection over speech is usually a black box. We introduce the task of explainable audio hate speech detection, where a model must localize the spoken segment that grounds its decision, and compare cascading and End-to-End approaches on it.`,
      links: {
        paper: `https://aclanthology.org/2024.sigdial-1.45/`,
        pdf: `https://aclanthology.org/2024.sigdial-1.45.pdf`,
        arxiv: `https://arxiv.org/abs/2408.06065`,
        code: ``,
        bibtex: `@inproceedings{an-etal-2024-investigation,
    title = "An Investigation into Explainable Audio Hate Speech Detection",
    author = "An, JinMyeong and Lee, Wonjun and Jeon, Yejin and Ok, Jungseul and Kim, Yunsu and Lee, Gary Geunbae",
    booktitle = "Proceedings of the 25th Annual Meeting of the Special Interest Group on Discourse and Dialogue",
    year = "2024",
    pages = "533--543",
    url = "https://aclanthology.org/2024.sigdial-1.45/"
}`,
      },
    },
  ],

  // ------------------------------------------------------------------ education
  education: [
    {
      period: `2023 – 2025`,
      title: `M.S. in Artificial Intelligence`,
      organization: `POSTECH`,
      detail: `NLP Lab. Advisor: Gary Geunbae Lee. Co-advisor: Jungseul Ok.`,
      url: `https://nlp.postech.ac.kr/`,
    },
    {
      period: `2016 – 2022`,
      title: `B.S. in Physics`,
      organization: `UNIST`,
      detail: ``,
      url: `https://www.unist.ac.kr/`,
    },
    {
      period: `Spring 2019`,
      title: `Exchange student, Startup Semester`,
      organization: `University of California, Berkeley`,
      detail: ``,
      url: `https://drive.google.com/file/d/1mypwKRe9x-rFOvPRm-AZzoK8hECOPFYq/view?usp=sharing`,
    },
  ],

  // ----------------------------------------------------------------- experience
  experience: [
    {
      period: `2025.03 – Present`,
      title: `AI Engineer`,
      organization: `Samsung Electronics, Mobile eXperience (MX)`,
      detail: `Language AI Core R&D, Language AI Team. Planning and tool use in Bixby's multi-agent architecture, and evaluation of planning quality in production.`,
      url: ``,
    },
    {
      period: `2022 – 2023`,
      title: `NLP Track`,
      organization: `NAVER BoostCamp AI Tech`,
      detail: ``,
      url: ``,
    },
    {
      period: `2021 – 2022`,
      title: `Software Engineer Intern`,
      organization: `NAVER`,
      detail: `Place Search Service Development team.`,
      url: ``,
    },
  ],

  // --------------------------------------------------------------------- extras
  // Both sections are hidden automatically while their array is empty.
  awards: [
    // { period: `2024`, title: `Award name`, organization: `Granting body`, detail: ``, url: `` },
  ],

  service: [
    // { period: `2025`, title: `Reviewer`, organization: `ACL Rolling Review`, detail: ``, url: `` },
  ],
};
