import axios from 'axios';

export class ApiFeatures {
  constructor(role, module, apiInstance) {
    this.role = role;
    this.module = module;
    this.api = apiInstance;
    this.path = `/${this.role}/${this.module}/`;
  }

  async create(url, payload, headers = {}) {
    const { data, msg } = await this.api
      .post(this.path + url, payload, headers)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async delete(url, payload) {
    const { data, msg } = await this.api
      .post(this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async update(url, payload) {
    const { data, msg } = await this.api
      .post(this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async getById(url, payload) {
    const { data, msg } = await this.api
      .post(this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }
  
  async getUserCourses(url, payload) {
    const { data, msg } = await this.api
      .post(this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async getAll(url, payload) {
    const { data, msg, count } = await this.api
      .post(this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg, count };
  }

  async getAllById(url, payload) {
    const { data, msg, count } = await this.api
      .post(this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg, count };
  }
}
