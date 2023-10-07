import {ProjectStatusEnum} from "@/enums/project-status.enum";
import {Tag} from "@/models/Tag.model";

export interface CreateProjectRequest {
    repository_id: number
    name: string
    description: string
    repository_url: string
    abandonment_reason: string
    project_future: string
    project_abandonment_status: ProjectStatusEnum
    tags: Tag[]
    technologies: Tag[]
}
