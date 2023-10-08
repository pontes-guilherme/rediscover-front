import {RequestPagination} from "@/types/RequestPagination.type";

export interface QueryBuilderRequest {
  filters?: Object,
  sort?: { sortBy: string, sortOrder: 'asc' | 'desc' },
  includes?: string[],
  page?: RequestPagination,
  no_pagination?: boolean,
}
