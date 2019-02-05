import { Library } from '../../library/libray-item/library';

export class Goal{
    id : number;
    name : string;
    description : string;
    library? : Library;
}