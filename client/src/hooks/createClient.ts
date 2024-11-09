export type player = {
    name: string;
    score: number;
    isHost: boolean;
    };



export function createClient(name: string): player {
    return {
        name: name,
        score: 0,
        isHost: false,
    }
}
