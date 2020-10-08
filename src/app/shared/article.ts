import { Multimedia } from './multimedia';

export interface Article {
    abstract: string;
    byline: string;
    created_date: string;
    multimedia: Multimedia[]
    published_date: string;
    section: string;
    subsection: string;
    title: string;
    url: string;
}
