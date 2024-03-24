import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api';
import { CharacterDataContainer } from 'api/types';

class CharacterDataContainerStore {
  @observable characterDataContainer: CharacterDataContainer = {
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
    nameStartsWith: string | null = null
  ): Promise<void> => {
    try {
      this.loading = true;

      const characterDataContainer = await api.characters.getPage(
        limit,
        offset,
        nameStartsWith
      );

      runInAction(() => {
        this.characterDataContainer = characterDataContainer;
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
  getByComicId = async (id: string): Promise<void> => {
    try {
      this.loading = true;

      const characterDataContainer = await api.comics.getCharacters(id);

      runInAction(() => {
        this.characterDataContainer = characterDataContainer;
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

const characterDataContainerStore = new CharacterDataContainerStore();

export { characterDataContainerStore };
