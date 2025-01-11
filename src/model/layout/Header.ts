export interface IHeaderGroup {
    id: string;
    icon: string;
    group: IHeaderLink[];
}

export interface IHeaderLink {
    id: string;
    icon?: string;
    content: string;
}