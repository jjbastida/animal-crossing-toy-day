export interface DataSet {
  name: string;
  data: Record<
    string,
    {
      imageUrl?: string;
      audioUrl?: string;
      name: string;
      description?: string;
      sellPrice?: number;
    }
  >;
}
