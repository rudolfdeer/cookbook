import SERVER_URL from '../../constants/serverUrl';
import { AuthRequestBody, User, UserRequestBody } from '../../interfaces';

const base = `${SERVER_URL}/api`;
const userUrl = `${base}/user/`;

class UserApi {
  async getUserById(userId: number): Promise<User> {
    const response = await fetch(`${userUrl}${userId}`);
    const result = await response.json();
    return result;
  }

  async getLoggedInUser(): Promise<User> {
    const response = await fetch(`${userUrl}`, {
      credentials: 'include',
    });
    const result = await response.json();
    return result;
  }

  async signIn(data: AuthRequestBody) {
    const response = await fetch(`${userUrl}sign-in`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async signUp(data: AuthRequestBody) {
    const response = await fetch(`${userUrl}sign-up`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async signOut() {
    await fetch(`${userUrl}sign-out`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  async deleteUser() {
    await fetch(`${userUrl}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  async updateUser(body: UserRequestBody) {
    const response = await fetch(`${userUrl}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async changePassword(password: string) {
    const body = {
      password,
    };

    const response = await fetch(`${userUrl}change-password`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async changeEmail(email: string) {
    const body = {
      email,
    };

    const response = await fetch(`${userUrl}change-email`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }

  async getAllUsers() {
    const response = await fetch(`${userUrl}users/all`);

    const result = await response.json();
    return result;
  }

  async updateUsersPhoto(data: FormData) {
    const response = await fetch(`${userUrl}update-photo`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    const result = await response.json();
    return result;
  }
}

export default new UserApi();
