import api from "@/services/client-axios";
import {Technology} from "@/models/Technology.model";
import {JsonResponse} from "@/models/Base/JsonResponse.interface";

export const fetch = async () => {
    return api.get<JsonResponse<Technology[]>>("/technologies");
}
