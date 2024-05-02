export async function checkSession() {
  try {
      const response = await fetch('http://localhost:8080/api/auth/validate-session', {
        credentials: 'include'  
      });
    if (response.ok) {
      const data = await response.json();
      return data.isLoggedIn;
    }
    return false;
  } catch (error) {
    console.error("Failed to validate session:", error);
    return false;
  }
}
