export interface IHeaderGroup {
    id: string;
    icon: string;
    group: IHeaderLink[];
}

export interface IHeaderLink {
    id: string;
    content: string;
}