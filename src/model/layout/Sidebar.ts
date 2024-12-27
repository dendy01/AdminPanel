export interface ISidebarLink {
    id: string;
    content: string;
    icon: string;
    select?: ISelect[];
}

export interface ISelect {
    id: string;
    content: string;
    link?: string;
}

export interface ISidebarGroup {
    id: string;
    title?: string;
    group: ISidebarLink[];
}


// SOLID & MVVM

// I - interface segregation