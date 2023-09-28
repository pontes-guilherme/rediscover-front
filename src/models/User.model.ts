import {SoftDeleteModel} from "@/models/Base/Model.interface";

export interface User extends SoftDeleteModel {
    name: string;
    email: string;
    user_type: string;
}
