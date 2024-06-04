export class HooksClass {
    #dispatch;
    #createMethod;
    #updateMethod;
    #deleteMethod;
    constructor(dispatch, createMethod, updateMethod, deleteMethod) {
      this.#dispatch = dispatch;
      (this.#createMethod = createMethod),
        (this.#updateMethod = updateMethod),
        (this.#deleteMethod = deleteMethod);
    }
  
    createDoc(data) {
      this.#dispatch(this.#createMethod(data));
    }
    updateDoc(data) {
      this.#dispatch(this.#updateMethod(data));
    }
    deleteDoc(data) {
      this.#dispatch(this.#deleteMethod(data));
    }
  }
  