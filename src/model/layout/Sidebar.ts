export interface ISidebarLink {
    id: string,
    content: string,
    icon: string,
    select?: ISelect[]
}

export interface ISelect {
    id: string,
    content: string
}

export interface ISidebarGroup {
    id: string,
    title?: string,
    group: ISidebarLink[],
}

// export interface ISidebarSubject {
//     links: ISidebarGroup[],
// }



// export type ISidebarTree = any;


// SOLID & MVVM

// I - interface segregation