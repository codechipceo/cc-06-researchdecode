export class ApiFeatures {
  constructor(role, module, apiInstance) {
    this.role = role;
    this.module = module;
    this.api = apiInstance;
    this.path = `/${this.role}/${this.module}/`;
  }

  async create(url, payload, headers = {}, method = "post") {
    const { data, msg } = await this.api[method](
      this.path + url,
      payload,
      headers
    )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async delete(url, payload, method = "post") {
    const { data, msg } = await this.api[method](this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async update(url, payload, method = "post") {
    const { data, msg } = await this.api[method](this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async getById(url, payload, method = "post") {
    const { data, msg } = await this.api[method](this.path + url, payload)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg };
  }

  async getAll(url, payload, method = "post") {
    const { data, msg, count } = await this.api[method](
      this.path + url,
      payload
    )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg, count };
  }

  async getAllById(url, payload, method = "post") {
    const { data, msg, count } = await this.api[method](
      this.path + url,
      payload
    )
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
    return { data, msg, count };
  }
}
