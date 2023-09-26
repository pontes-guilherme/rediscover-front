export interface Model {
  id: number;
  created_at?: string;
  updated_at?: string;
}

export interface SoftDeleteModel extends Model {
  deleted_at?: string;
}
