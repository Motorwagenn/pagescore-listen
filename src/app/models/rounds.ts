export interface RoundInfo {
    id: string;
    title: string;
    path: string;
}

export interface Round {
    id: string;
    title: string;
    moods: MoodGroup[];
}

export interface MoodGroup {
    mood: string;
    clips: Clip[];
}

export interface Clip {
    n: number;
    file: string;
}

export interface ClipRating {
  roundId: string;
  n: number;
  fits: string | null;     // 'yes' | 'no'
  quality: string | null;  // 'good' | 'ok' | 'bad'
}