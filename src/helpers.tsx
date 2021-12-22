import { APISearchResponse, Image } from './types';

export const parseAPIresponse = (response: APISearchResponse): Image[] => {
  debugger;
  return response.collection.items.map<Image>((item) => {
    const [data] = item.data;
    const [links] = item.links;
    return {
      dateCreated: new Date(data.date_created),
      description: data.description,
      keywords: data.keywords,
      nasaId: data.nasa_id,
      title: data.title,
      href: links.href,
      rel: links.rel,
    };
  })
};
