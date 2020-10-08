import { Multimedia } from './multimedia';

export interface SearchResult {
    abstract: string;
    byline: {
        original: string;
        person: {
            firstname: string;
            middlename: string;
            lastname: string;
            role: string;
        }[]
    };
    headline: {
        main: string;
    }
    keywords: {
        name: string;
        value: string;
        rank: number;
        major: string;
    }[];
    multimedia: Multimedia[];
    new_desk: string;
    pub_date: string;
    section_name: string;
    snippet: string;
    source: string;
    subsection_name: string;
    web_url: string;
    word_count: number;


}
