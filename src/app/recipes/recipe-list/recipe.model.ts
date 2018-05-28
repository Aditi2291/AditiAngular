export class Recipe{

public name:string;
public description:string;
public image: string;

constructor(name1:string, desc:string, path)
 {

    this.name=name1;
    this.description=desc;
    this.image=path;
 }
}