import api from "@/services/client-axios";
import {CreateProjectRequest, Project} from "@/models/Project.model";
import {CustomResponse} from "@/models/Base/CustomResponse.interface";
import {JsonResponse} from "@/models/Base/JsonResponse.interface";

export const create = async (data: CreateProjectRequest) => {
  return api.post<CustomResponse<any>>("/projects", data);
}

export const fetch = async () => {
  return api.get<JsonResponse<Project[]>>("/projects");
}

export const get = async (id: number) => {
  return api.get<JsonResponse<Project>>(`/projects/${id}`);
}
