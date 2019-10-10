import { Presentateur } from './presentateur';

export interface SessionAvecPresentateur {

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
    speakers: Presentateur[];
    tracks: {
        title: string;
    };

}
