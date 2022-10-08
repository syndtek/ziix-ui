export default async function getCatalog(catalogId) {
  const req = await fetch(`/dump/catalogs/${catalogId}.json`);
  const data = await req.json();
  return data;
}
