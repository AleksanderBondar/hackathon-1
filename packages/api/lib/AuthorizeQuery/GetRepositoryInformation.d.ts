import { FieldResolveInput } from 'stucco-js';
export declare const handler: (input: FieldResolveInput) => Promise<{
    id: string;
    fullName: string;
    private?: boolean | undefined;
    owner?: {
        login: string;
        id: string;
        avatarUrl: string;
        profileUrl: string;
        isAdmin: string;
    } | undefined;
    contributors: {
        login: string;
        id: string;
        avatarUrl: string;
        profileUrl: string;
        isAdmin: string;
    }[];
    createdAt: string;
    pushedAt: string;
    updatedAt: string;
    archived: boolean;
    license?: {
        name: string;
        key: string;
    } | undefined;
    stars?: number | undefined;
    forks?: number | undefined;
    open_issues?: number | undefined;
    watchers?: number | undefined;
} | {
    contributors: {
        login: string;
        id: string;
        avatarUrl: string;
        profileUrl: string;
        isAdmin: string;
    }[];
    id: string;
    fullName: string;
    private?: boolean | undefined;
    owner?: {
        login: string;
        id: string;
        avatarUrl: string;
        profileUrl: string;
        isAdmin: string;
    } | undefined;
    createdAt: string;
    pushedAt: string;
    updatedAt: string;
    archived: boolean;
    license?: {
        name: string;
        key: string;
    } | undefined;
    stars?: number | undefined;
    forks?: number | undefined;
    open_issues?: number | undefined;
    watchers?: number | undefined;
}>;
