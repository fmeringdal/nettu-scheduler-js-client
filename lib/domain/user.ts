import { Metadata } from "./metadata";

export type User = {
    id: string;
    accountId: string;
    metadata: Metadata;
}