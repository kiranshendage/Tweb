// src/data/projectsData.js
import img1 from "../assets/news/img1.png";
const projects = [
    {
        id: 1, // or next available ID
        title: "Dhairyasiddhi News24",
        shortDesc: "24/7 real-time news portal with multimedia content delivery.",
        longDesc: "A comprehensive Hindi/Gujarati news portal delivering breaking news, local updates, and multimedia content 24/7. Built with modern web technologies featuring responsive design, fast loading times, SEO optimization, and social media integration. Covers politics, sports, entertainment, business, and local news with real-time updates and push notifications.",
        img: img1,
        gallery: [
            img1, img1, img1, img1
        ],
        tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Cloudinary", "Firebase"],
        link: "https://dhairyasiddhinews24.in/",
        github: "https://github.com/username/dhairyasiddhi-news24",
        featured: true,
        rating: 4.8,
        reviews: 127,
        launchDate: "2024-06-15",
        gradient: "from-red-600 via-orange-600 to-yellow-600",
        accentColor: "#DC2626",
        category: "News & Media",
        status: "Live",
        client: "Dhairyasiddhi Media Group",
        features: [
            {
                title: "Real-time News Updates",
                description: "Breaking news delivered instantly with push notifications and live ticker"
            },
            {
                title: "Multi-language Support",
                description: "Seamless Hindi and Gujarati content with Unicode text rendering"
            },
            {
                title: "Responsive Design",
                description: "Optimized for all devices - mobile, tablet, and desktop viewing"
            },
            {
                title: "Category Navigation",
                description: "Organized news sections - Politics, Sports, Entertainment, Business, Local"
            },
            {
                title: "Social Media Integration",
                description: "One-click sharing to WhatsApp, Facebook, Twitter, and more"
            },
            {
                title: "Image & Video Gallery",
                description: "Rich multimedia content with lazy loading and compression"
            },
            {
                title: "Search Functionality",
                description: "Full-text search with filters and auto-suggestions"
            },
            {
                title: "Admin Dashboard",
                description: "CMS for editors to publish, edit, and manage news articles"
            },
            {
                title: "SEO Optimized",
                description: "Meta tags, structured data, and sitemap for search engine visibility"
            },
            {
                title: "Fast Loading",
                description: "Optimized images, CDN delivery, and code splitting for speed"
            }
        ],
        metrics: {
            performance: 89,
            accessibility: 92,
            seo: 95,
            bestPractices: 88
        },
        highlights: [
            "50,000+ monthly visitors",
            "1000+ articles published",
            "24/7 news coverage",
            "5+ content editors"
        ],
        testimonial: {
            text: "The website has transformed how we deliver news to our audience. Fast, reliable, and easy to manage.",
            author: "Dhairyasiddhi Media Team",
            role: "Editorial Board"
        }
    }
];

export default projects;