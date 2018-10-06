import * as apiUtils from './api-utils';
import { ProxyControllerInterface } from './types/interfaces';

// A proxy class that allows early access to controller methods
export default class ProxyController implements ProxyControllerInterface {
  constructor(public tag: string) {}

  create(opts: object = {}): Promise<any> {
    return apiUtils.proxyMethod(this.tag, 'create', opts);
  }

  dismiss(): Promise<any> {
    return apiUtils.proxyMethod(this.tag, 'dismiss');
  }

  getTop(): Promise<any> {
    return apiUtils.proxyMethod(this.tag, 'getTop');
  }
}
