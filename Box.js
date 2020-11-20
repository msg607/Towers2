class Box {
    constructor(x,y,width,height){
        var options = {
            restitution: 1,
            friction: 0,
            density: 1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.Visibility= 255
        World.add(world,this.body);    
    }
    display(){
        var pos = this.body.position;

        if(this.body.speed < 3){
            push();
            translate(pos.x,pos.y);
            rectMode(CENTER);
            fill("pink");
            rect(0,0,this.width,this.height);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             rect(0,0,this.width,this.height);
             pop(); }
       
    }
}


