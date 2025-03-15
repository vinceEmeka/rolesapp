export type Role = 'admin' | 'editor' | 'viewer';

export interface User {
  username: string;
  role: Role;
}
