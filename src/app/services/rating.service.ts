import { Service, signal } from '@angular/core';
import { ClipRating } from '../models/rounds';
import { Preferences } from '@capacitor/preferences';

@Service()
export class RatingService {
    private readonly ratings = signal<ClipRating[]>([]);
    readonly all = this.ratings.asReadonly();
    private readonly storageKey = 'ratings';

    constructor() {
        this.load();
    }

    private async load() {
        const { value } = await Preferences.get({ key: this.storageKey });
        if (value) {
            this.ratings.set(JSON.parse(value));
        }
    }

    private async persist() {
        await Preferences.set({ key: this.storageKey, value: JSON.stringify(this.ratings()) });
    }

    get(roundId: string, n: number): ClipRating | undefined {
        return this.ratings().find((r) => r.roundId === roundId && r.n === n);
    }

    set(rating: ClipRating) {
        this.ratings.update((list) => [
            ...list.filter((r) => !(r.roundId === rating.roundId && r.n === rating.n)),
            rating,
        ]);
        this.persist();
    }
}
