const ENDPOINT = 'https://eldenring.fanapis.com/api';

interface Item {
  id: string;
  name: string;
  image: string;
  effect: string;
  description: string;
  type: string;
}

export async function getItems(page: number, limit: number = 20) {
  const resp = await fetch(`${ENDPOINT}/items?page=${page}&limit=${limit}`).then(r => r.json());
  if (resp.success) return resp.data as Item[];
  throw new Error(resp.message);
}

export async function getItemById(id: string) {
  const resp = await fetch(`${ENDPOINT}/items/${id}`).then(r => r.json());
  if (resp.success) return resp.data as Item;
  throw new Error(resp.message);
}
