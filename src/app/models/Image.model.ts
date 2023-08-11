export interface IPicture{
  uuid: string;
  url: string;
  title: string;
  content_type: string;
  tags: Array<any>;
}

export interface IRequestResponse {
  entries: {
    fields:{
      image: IPicture
    };
    meta: {
      author: any;
    }
  }
  meta: {
    current_page: number;
    per_page: number;
    total_entries: number;
    toal_pages: number;
  };
}