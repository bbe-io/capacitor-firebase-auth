import { WebPlugin } from '@capacitor/core';
import {BbeIoCapacitorFirebaseAuthPlugin, SignInResult} from './definitions';

export class BbeIoCapacitorFirebaseAuthWeb extends WebPlugin implements BbeIoCapacitorFirebaseAuthPlugin {
  constructor() {
    super({
      name: 'BbeIoCapacitorFirebaseAuth',
      platforms: ['web']
    });
  }

  async signIn(options: {providerId: string;}): Promise<SignInResult> {
    return Promise.resolve({providerId: options.providerId, idToken: undefined});
  }

  // @ts-ignore
  async signOut(options: {}): Promise<void> {
    return Promise.resolve();
  }
}

const BbeIoCapacitorFirebaseAuth = new BbeIoCapacitorFirebaseAuthWeb();

export { BbeIoCapacitorFirebaseAuth };
