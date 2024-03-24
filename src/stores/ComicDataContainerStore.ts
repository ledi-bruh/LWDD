import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api';
import { ComicDataContainer } from 'api/types';

class ComicDataContainerStore {
  @observable comicDataContainer: ComicDataContainer = {} as ComicDataContainer;

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

  @action
  getByCharacterId = async (id: string): Promise<void> => {
    try {
      this.loading = true;

      const comicDataContainer = await api.characters.getComics(id);

      runInAction(() => {
        this.comicDataContainer = comicDataContainer;
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

const comicDataContainerStore = new ComicDataContainerStore();

export { comicDataContainerStore };
