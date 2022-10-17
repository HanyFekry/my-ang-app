export class movie {
    id:number;
    title: string;
    duration: number;
    category: string;
    votes: number;
    isFavourite:boolean;
    constructor() {
      this.id=1;
        this.title='';
        this.category='';
        this.duration=0;
        this.votes=0;
        this.isFavourite=false
    }
}