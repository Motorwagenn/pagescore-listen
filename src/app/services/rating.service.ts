import { Service, signal } from '@angular/core';
import { ClipRating } from '../models/rounds';

@Service()
export class RatingService {
    private readonly ratings = signal<ClipRating[]>([]);
    readonly all = this.ratings.asReadonly();

    get(roundId: string, n: number): ClipRating | undefined {
        return this.ratings().find((r) => r.roundId === roundId && r.n === n);
    }

    set(rating: ClipRating) {
        this.ratings.update((list) => [
            ...list.filter((r) => !(r.roundId === rating.roundId && r.n === rating.n)),
            rating,
        ]);
    }
}
