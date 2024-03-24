import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api';
import { Comic } from 'api/types';

class ComicStore {
  @observable comic: Comic | null = null;

  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getById = async (id: string): Promise<void> => {
    try {
      this.loading = true;

      const comic = await api.comics.getById(id);

      runInAction(() => {
        this.comic = comic;
        this.loading = false;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const comicStore = new ComicStore();

export { comicStore };
