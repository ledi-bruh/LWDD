import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api';
import { Character } from 'api/types';

class CharacterStore {
  @observable character: Character = {} as Character;

  @observable loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getById = async (id: string): Promise<void> => {
    try {
      this.loading = true;

      const character = await api.characters.getById(id);

      runInAction(() => {
        this.character = character;
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

const characterStore = new CharacterStore();

export { characterStore };
