export interface Account {
  id: string;
  publicJwtKey?: string;
  settings: {
    webhook?: {
      url: string;
      key: string;
    }
  }
}
