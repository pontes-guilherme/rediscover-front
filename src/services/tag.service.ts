import api from "@/services/client-axios";
import {Tag} from "@/models/Tag.model";
import {JsonResponse} from "@/models/Base/JsonResponse.interface";

export const fetch = async () => {
    return api.get<JsonResponse<Tag[]>>("/tags");
}
