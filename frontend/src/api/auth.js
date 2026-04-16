const API_URL = "http://localhost:8000/api/auth";

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Login failed");
  }

  return data;
};


export const registerUser = async (username, email, password) => {
  const response = await fetch("http://localhost:8000/api/auth/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    if (data.email) {
      throw new Error(data.email[0]);
    }
    if (data.username) {
      throw new Error(data.username[0]);
    }
    throw new Error("Registration failed");
  }

  return data;
};