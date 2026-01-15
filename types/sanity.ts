// Sanity content type interfaces
export interface PersonalInfo {
    _id: string;
    name: string;
    tagline?: string;
    about?: any[]; // Rich text blocks
    bioParagraph1?: string;
    bioParagraph2?: string;
    profileImage?: {
        asset: {
            _ref: string;
            url?: string;
        };
    };
}

export interface Project {
    _id: string;
    title: string;
    description?: string;
    tags?: string[];
    link?: string;
    image?: {
        asset: {
            _ref: string;
            url?: string;
        };
    };
    order?: number;
}

export interface Experience {
    _id: string;
    title: string;
    company: string;
    type?: string;
    period?: string;
    location?: string;
    description?: string;
    skills?: string[];


    logo?: {
        asset: {
            _ref: string;
            url?: string;
        };
    };
    order?: number;
}

export interface Education {
    _id: string;
    institution: string;
    degree: string;
    period?: string;
    grade?: string;
    skills?: string[];
    link?: {
        text: string;
        url: string;
    };

    logo?: {
        asset: {
            _ref: string;
            url?: string;
        };
    };
    order?: number;
}

export interface SkillCategory {
    _id: string;
    title: string;
    skills: string[];
    order?: number;
}

export interface Contact {
    _id: string;
    email?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
}
