import { ISalesAgent } from './salesagent';
import { IDescription } from './description';
import { ICharacteristicsSection } from './characteristicssection';
import { IPicture } from './picture';

export interface IUnit {
    id: string;
    projectId: string;
    salesAgent: ISalesAgent;
    name: string;
    mainDescription: IDescription;
    descriptions: IDescription[];
    characteristicsSections: ICharacteristicsSection[];
    pictures: IPicture[];
    price: number;
    rent: number;
    size: number;
    sold: boolean;
    thumbnail: string;
    googleMapsUrl: string;
}
