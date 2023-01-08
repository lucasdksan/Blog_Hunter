const fetchRepositories = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  const links = parseLinkHeader(response.headers.get('Link') as string);

  return { data, links };
}

function parseLinkHeader(linkHeader: string) {
  if (!linkHeader) {
    return {};
  }

  const links:any = {};
  linkHeader.split(',').forEach((link) => {
    const parts = link.split(';');
    const url = parts[0].slice(1, -1);
    const name = parts[1].slice(5, -1);
    links[name] = url;
  });
  return links;
}

export { fetchRepositories }