import { IUnit } from './unit';
import { IDescription } from './description';
import { IPicture } from './picture';

export interface IProject {
    id: string;
    name: string;
    mainDescription: IDescription;
    descriptions: IDescription[];
    pictures: IPicture[];
    units: IUnit[];
}


