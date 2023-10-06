import api from "@/services/client-axios";
import {CreateProjectRequest} from "@/models/Project.model";
import {CustomResponse} from "@/models/Base/CustomResponse.interface";

export const create = async (data: CreateProjectRequest) => {
    return api.post<CustomResponse<any>>("/projects", data);
}
