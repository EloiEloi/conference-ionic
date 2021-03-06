export interface Session {

    id: number;
    title: string;
    titleMobile: string;
    image: string;
    description: string;
    type: string;
    category: string;
    language: string;
    tags: string[];
    complexity: string;
    speakers: number[];
    tracks: {
        title: string;
    };

}
