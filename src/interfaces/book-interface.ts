export interface BookInterface {
    title: string;
    author: string;
    publicationYear: number;
}

export interface BookResponseInterface extends BookInterface {
    id: number;
    updatedAt: string;
    createdAt: string;
}