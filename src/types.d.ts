
export interface Person {
    name: string;
    hair_color: string;
    disposition: string;
}

export interface PeopleTemplateProps {
    people: Person[];
    show: boolean;
}