
class GradientDescent {


    constructor(lr,a,b,c) {

        this.lr = lr;
        this.a=a;
        this.b=b;
        this.c=c;

        this.weight = Math.random()*100;
        
        this.quadratic = (x) => {
            return this.a*(Math.pow(x,2)) + this.b*x + this.c;
        }
        
        this.diff = (x) => {
            return 2*(this.a)*x + this.b;
        }

    }

    
    gradient_descent(iterations) {
    
        for(let i=0;i<iterations;i++) {
            console.log(this.weight)
            this.weight -= this.lr * this.diff(this.weight);
        }
    
        return this.weight;
    }
    



}    


