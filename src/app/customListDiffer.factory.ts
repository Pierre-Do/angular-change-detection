import { Injectable, IterableDiffer, IterableDifferFactory, TrackByFunction } from '@angular/core';
import { CustomListDiffer } from './customListDiffer';

@Injectable()
export class CustomListDifferFactory<TType> implements IterableDifferFactory {
  supports(objects: any): boolean {
    return !!objects[0]['key'];
  }

  create<V>(trackByFn?: TrackByFunction<V>): IterableDiffer<V> {
    return new CustomListDiffer();
  }
}
