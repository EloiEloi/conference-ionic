export interface Presentateur {
    id: number;
    name: string;
    featured: boolean;
    company: string;
    companyLogo: string;
    country: string;
    photoUrl: string;
    shortBio: string;
    bio: string;
    tags: string[];
    badges: {
        name: string;
        description: string;
    };
    socials: {
        icon: string;
        name: string;
        link: string;
    };
}
