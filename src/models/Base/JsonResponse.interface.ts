export interface JsonResponse<T> {
  data: T;
  meta: {
    from?: number
    to?: number
    current_page?: number
    last_page?: number
    per_page?: number
    total?: number
    path?: string
    links?: { url: string, label: string, active: boolean }[]
  }
  links?: { first: string, last: string, next: string, prev: string }[]
}
