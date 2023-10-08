import {AxiosResponse} from "axios";
import api from "@/services/admin-axios";
import {JsonResponse} from "@/models/Base/JsonResponse.interface";
import {QueryBuilderRequest} from "@/models/Base/FetchRequest.interface";
import {Project} from "@/models/Project.model";
import {prepareQueryBuilderRequest} from "@/utils/request.util";

export const fetch = async (params: QueryBuilderRequest): Promise<AxiosResponse<JsonResponse<Project[]>>> => {
  let url = `/admin/projects?`;

  url = prepareQueryBuilderRequest(url, params);

  return api.get<JsonResponse<Project[]>>(url);
};

export const get = async (id: number): Promise<AxiosResponse<JsonResponse<Project>>> => {
  return api.get<JsonResponse<Project>>(`/admin/projects/${id}`);
};

export const destroy = async (id: number): Promise<AxiosResponse> => {
  return api.delete(`/admin/projects/${id}`);
};
