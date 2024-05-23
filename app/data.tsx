import { FacebookIcon, InstagramIcon, LinkedinIcon, SearchIcon, PieChartIcon, GoalIcon, ContentWriting, GraduationCapIcon, BadgeIcon, AwardIcon } from "./components/icons";

export const HeroText = "I am a PPC specialist and content writer with a proven track record of success in helping businesses grow their online presence. I help businesses like yours attract more qualified leads, boost conversions, and achieve their marketing goals through the power of compelling content and strategic PPC campaigns."

export const profiles = {
    github: "https://github.com/",
    upwork: "https://www.upwork.com/",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
    email:"https://mail.google.com/",
}

export const Services = [
    {
      icon: SearchIcon,
      heading: "Google Ads",
      details: "Leverage the power of Google's search engine to reach your target audience and drive qualified leads.",
    },
    {
      icon: FacebookIcon,
      heading: "Facebook Ads",
      details: "Tap into the vast user base of Facebook and Instagram to deliver highly targeted and engaging ad campaigns.",
    },
    {
      icon: InstagramIcon,
      heading: "Instagram Ads",
      details: "Leverage the power of the fastest-growing social media platform to reach a younger, more engaged audience.",
    },
    {
      icon: LinkedinIcon,
      heading: "LinkedIn Ads",
      details: "Tap into the professional network of LinkedIn to connect with your target B2B audience and drive high-quality leads.",
    },
    {
      icon: PieChartIcon,
      heading: "Analytics & Reporting",
      details: "Gain valuable insights into the performance of your PPC campaigns and make data-driven decisions to optimize your results.",
    },
    // {
    //   icon: GoalIcon,
    //   heading: "PPC Strategy",
    //   details: "Benefit from our expert's strategic approach to PPC, tailored to your unique business goals and target audience.",
    // },
    {
      icon: ContentWriting,
      heading: "Content Writing",
      details: "Leverage our expert content writing services to create compelling ad copy and landing pages that convert.",
    },
];

export const Blogs = [
    {
        heading: "Facebook Ads Vs TikTok Ads",
        data: "Are you stuck between the never-ending stigma of which social media platform to use for your brand when it comes to Facebook and TikTok ads?",
        url: "https://adstage.io/facebook-ads-vs-tiktok-ads-whats-better/"
    },
    {
        heading: "Facebook Ads for E-Commerce: 8 Pro Tips",
        data: "In Facebook advertising, a good Click-Through Rate (CTR) is essential for success. CTR, a pivotal metric, measures the ratio of clicks on an ad to its total impressions.",
        url: "https://adstage.io/facebook-ads-for-e-commerce-8-pro-tips-to-skyrocket-your-growth/"
    },
    {
        heading: "Google Ads Specialist",
        data: "Have you been daydreaming about becoming a Google Ads Specialist for far too long without any plausible outcomes?",
        url: "https://adstage.io/google-ads-specialist-how-to-become-an-excellent-one/"
    }
];

export const education = [
    {
        degree:"Masters Degree",
        details:"Earned a Master's Degree in Digital Marketing from International University, specializing in advanced strategies and analytics to optimize Pay-Per-Click campaigns for business success.",
        url: "https://www.iu.org/master/digital-marketing/",
        icon: GraduationCapIcon
    },
    {
        degree:"Google Ad's Masterclass",
        details:"Completed the Google Ads Masterclass on Udemy platform, gaining expertise in leveraging Google Ads to drive growth and optimize digital marketing campaigns.",
        url: "https://www.udemy.com/course/google-ads-course/?couponCode=LEADERSALE24A",
        icon: BadgeIcon
    },
    {
        degree:"Skill-Shop Certificate",
        details:"Obtained a Google Ads certification from Skillshop, demonstrating proficiency in creating and managing effective ad campaigns to drive business growth and maximize ROI.",
        url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=53-google-ads",
        icon: AwardIcon
    }
]