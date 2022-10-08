export default async function getRelease(code) {
  const req = await fetch(`/dump/release/${code}/data.json`);
  const data = await req.json();
  return data;
}
