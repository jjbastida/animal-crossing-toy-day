export interface PresentDetail {
  present: {
    id: string;
    items: {
      name: string;
    };
  };
  points: number;
}

export interface PresentsSectionProps {
  presentDetails: PresentDetail[];
}

export type { PresentDetail };
