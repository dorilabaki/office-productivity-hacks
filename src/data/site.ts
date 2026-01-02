export const siteConfig = {
  name: "Office Productivity Hacks",
  description: "Work smarter, not harder. Master Excel, Google Sheets, and office software with practical tips, shortcuts, and tutorials.",
  url: "https://officeproductivityhacks.com",
  linkedInUrl: "https://www.linkedin.com/company/office-productivity-hacks",
  followers: "115,269",
  followersAggregated: "+115k",
  followersTagline: "professionals boosting productivity",
  industry: "E-Learning Providers",
  specialties: [
    "Excel Tips",
    "Google Sheets",
    "Productivity Hacks",
    "Office Software",
    "Keyboard Shortcuts",
    "Data Analysis"
  ],
  navigation: [
    { name: "Home", href: "/" },
    { name: "Resources", href: "/resources" },
    { name: "Guides", href: "/guides" },
    { name: "Shortcuts", href: "/shortcuts" },
    { name: "Glossary", href: "/glossary" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  footerNavigation: {
    resources: [
      { name: "Articles", href: "/resources" },
      { name: "Guides", href: "/guides" },
      { name: "Shortcuts", href: "/shortcuts" },
      { name: "Glossary", href: "/glossary" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Feed", href: "/feed" }
    ],
    software: [
      { name: "Excel Tips", href: "/resources?category=excel" },
      { name: "Google Sheets", href: "/resources?category=sheets" },
      { name: "Microsoft Word", href: "/resources?category=word" }
    ]
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/office-productivity-hacks"
  },
  stats: [
    { value: "+115k", label: "professionals boosting productivity" },
    { value: "500+", label: "Tips & Shortcuts" },
    { value: "50K+", label: "Professionals Helped" },
    { value: "4.9/5", label: "Content Rating" }
  ],
  features: [
    {
      title: "Excel Mastery",
      description: "From VLOOKUP to Pivot Tables, master every Excel function that matters.",
      icon: "table",
      color: "excel"
    },
    {
      title: "Google Sheets",
      description: "Unlock the power of QUERY, ARRAYFORMULA, and cloud collaboration.",
      icon: "sheet",
      color: "sheets"
    },
    {
      title: "Keyboard Shortcuts",
      description: "Save hours every week with the shortcuts professionals use daily.",
      icon: "keyboard",
      color: "primary"
    },
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with proven techniques.",
      icon: "chart",
      color: "word"
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Office Productivity Hacks",
  "url": "https://officeproductivityhacks.com",
  "logo": "https://officeproductivityhacks.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/office-productivity-hacks"
  ],
  "description": "Office Productivity Hacks helps professionals work smarter with everyday tools. We share tips, shortcuts, and tutorials on Excel, Google Sheets, and productivity software.",
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "5-10"
  },
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Microsoft Excel",
    "Google Sheets",
    "Microsoft Word",
    "Keyboard Shortcuts",
    "Data Analysis",
    "Office Productivity"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Office Productivity Hacks",
  "url": "https://officeproductivityhacks.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://officeproductivityhacks.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
