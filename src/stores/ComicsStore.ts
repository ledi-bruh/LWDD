import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api';
import { ComicDataContainer } from 'api/types';

class ComicsStore {
  @observable comicDataContainer: ComicDataContainer = {
    total: 0,
    results: []
  };

  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getPage = async (
    limit: number,
    offset: number,
    titleStartsWith: string | null = null
  ): Promise<void> => {
    try {
      this.loading = true;

      const comicDataContainer = await api.comics.getPage(
        limit,
        offset,
        titleStartsWith
      );

      runInAction(() => {
        this.comicDataContainer = comicDataContainer;
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

const comicsStore = new ComicsStore();

export { comicsStore };
