import fetch from 'node-fetch';
const API_KEY = 'pk_55630549_N9VULUO5AZ1UGM33S8OZF8ZH0MNSGRBI';
const spaceID = '9008095207';

async function getSpaces() {
  const query = new URLSearchParams({ archived: 'false' }).toString();

  const teamId = '9008095207';
  const resp = await fetch(
    `https://api.clickup.com/api/v2/team/${teamId}/space?${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await resp.json();
  console.log(data);
}

// getSpaces();

async function getLists() {
  const query = new URLSearchParams({ archived: 'false' }).toString();

  const resp = await fetch(
    `https://api.clickup.com/api/v2/space/${spaceID}/list?${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await resp.json();
  console.log(data);
}

// getLists();

async function getTasks() {
  const query = new URLSearchParams({
    archived: 'false',
  }).toString();

  const listId = '901507335129';
  const resp = await fetch(
    `https://api.clickup.com/api/v2/list/${listId}/task?${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await resp.json();
  console.log(data.tasks[0].status);
}

getTasks();
