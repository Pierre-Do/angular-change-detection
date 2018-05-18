import { IterableChangeRecord, IterableChanges, IterableDiffer, NgIterable } from '@angular/core';

export class CustomListDiffer<T> implements IterableDiffer<T>, IterableChanges<T> {
  previousCollection: T[];
  changes: T[];

  diff(collection: NgIterable<T>): IterableChanges<T> | null {
    console.log(this.previousCollection, collection);

    this.previousCollection = collection as Array<T>;
    this.changes = collection as Array<T>;

    return this as IterableChanges<T>;
  }

  forEachAddedItem(fn: (record: IterableChangeRecord<T>) => void): void {
    console.log('forEachAddedItem', arguments, this.changes);
  }

  forEachIdentityChange(fn: (record: IterableChangeRecord<T>) => void): void {
    console.log('forEachIdentityChange', arguments, this.changes);
    this.changes.forEach(el => fn({ item: el, currentIndex: 0, previousIndex: 1, trackById: 1}));
  }

  forEachItem(fn: (record: IterableChangeRecord<T>) => void): void {
    console.log('forEachItem', arguments, this.changes);
  }

  forEachMovedItem(fn: (record: IterableChangeRecord<T>) => void): void {
    console.log('forEachMovedItem', arguments, this.changes);
  }

  forEachOperation(
    fn: (
      record: IterableChangeRecord<T>,
      previousIndex: number | null,
      currentIndex: number | null
    ) => void
  ): void {
    console.log('forEachOperation', arguments, this.changes);
  }

  forEachPreviousItem(fn: (record: IterableChangeRecord<T>) => void): void {
    console.log('forEachPreviousItem', arguments, this.changes);
  }

  forEachRemovedItem(fn: (record: IterableChangeRecord<T>) => void): void {
    console.log('forEachRemovedItem', arguments, this.changes);
  }
}
