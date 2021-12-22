export type Image = {
  dateCreated: Date,
  description: string,
  keywords: string[],
  nasaId: string,
  href: string,
  rel: string,
  title: string,
};


export type APISearchResponse = {
  collection: {
    items: {
      data: {
        date_created: string,
        description: string,
        keywords: string[],
        title: string,
        nasa_id: string,
      }[],
      links: {
        href: string,
        rel: string,
      }[],
      metadata: {
        total_hits: number,
      }
    }[];
  }
};
