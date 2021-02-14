const baseUrl = "https://optics-planet.com";

export async function repairPassword(email: string) {
  const response = await fetch(`${baseUrl}/repair-password`, {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify({ email }),
  });
  return await response.json();
}

export async function signIn(email: string, password: string) {
  const response = await fetch(`${baseUrl}/sign-in`, {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
}

export async function register(email: string, password: string, confirmPassword: string) {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify({ email, password, confirmPassword }),
  });
  return await response.json();
}
