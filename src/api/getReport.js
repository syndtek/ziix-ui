export default async function getReport() {
  const req = await fetch("/dump/report.json");
  const data = await req.json();
  return data;
}
