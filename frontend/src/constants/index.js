const navLinks = [
    {label: "Home"},
    {label: "TV Shows"},
    {label: "Movies"},
    {label: "Anime"},
    {label: "Games"},
    {label: "New & Popular"},
    {label: "Upcoming"},
]

const footerLinks = [
    {label: "FAQ"},
    {label: "Investor Relations"},
    {label: "Privacy"},
    {label: "Speed Test"},
    {label: "Games"},
    {label: "New & Popular"},
    {label: "Upcoming"},
]

const steps = [
  {
    name: "genre",
    label: "What's your favorite genre?",
    options: [
      "Action",
      "Comedy",
      "Drama",
      "Horror",
      "Romance",
      "Sci-Fi",
      "Animation",
    ],
  },
  {
    name: "mood",
    label: "What's your current mood?",
    options: [
      "Excited",
      "Relaxed",
      "Thoughtful",
      "Scared",
      "Inspired",
      "Romantic",
    ],
  },
  {
    name: "decade",
    label: "Preferred decade?",
    options: ["2020s", "2010s", "2000s", "1990s", "Older"],
  },
  {
    name: "language",
    label: "Preferred language?",
    options: ["English", "Korean", "Spanish", "French", "Other"],
  },
  {
    name: "length",
    label: "Preferred movie length?",
    options: ["Short (<90 min)", "Standard (90-120 min)", "Long (>120 min)"],
  },
];



export {
    navLinks,
    footerLinks,
    steps,
}