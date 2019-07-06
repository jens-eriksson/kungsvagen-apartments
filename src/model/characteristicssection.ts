import { ICharacteristic } from './characteristic';

export interface ICharacteristicsSection {
    id: number;
    heading: string;
    characteristics: ICharacteristic[];
}
