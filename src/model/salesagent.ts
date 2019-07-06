import { IPicture } from './picture';

export interface ISalesAgent {
    id: string;
    name: string;
    description: string;
    email: string;
    phone: string;
    picture: IPicture;
}
