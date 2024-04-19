import { Injectable } from "@angular/core";
import { KeyValue } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class MapDataSorter {
    originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
        return 0;
    }

    reverseKeyOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
        return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
    }

    valueOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
        return a.value.localeCompare(b.value);
    }
}
