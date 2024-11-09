export class Player {
    readonly name: string;

    constructor({ name }: { name: string }) {
        this.name = name;
    }
};



export function createClient(name: string) {
    console.log("create client", name)

    
}
