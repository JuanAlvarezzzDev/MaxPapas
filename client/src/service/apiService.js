import axios from "axios";

class Api {
  constructor() {
    this.baseURL = import.meta.env.API_URL || "http://127.0.0.1:8000";
    this.clienteAxios = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
    });
  }

  async fetch(url) {
    try {
      const { data } = await this.clienteAxios.get(`/api/${url}`, {
        headers: this.buildHeaders(),
      });
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async post(url, body) {
    try {
      const { data } = await this.clienteAxios.post(`/api/${url}`, body, {
        headers: this.buildHeaders(),
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async put(endpoint, id) {
    const url = `/api/${endpoint}/${id}`;
    try {
      await this.clienteAxios.put(url, null, {
        headers: this.buildHeaders(),
      });
    } catch (error) {
      throw error;
    }
  }

  async delete(endpoint, id) {
    const url = `/api/${endpoint}/${id}`;
    try {
      await this.clienteAxios.delete(url, {
        headers: this.buildHeaders(),
      });
    } catch (error) {
      throw error;
    }
  }

  buildHeaders() {
    const token = localStorage.getItem("AUTH_TOKEN");
    return {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Bearer ${token}`,
    };
  }
}

export default Api;