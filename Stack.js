var Stack = function(){
    this.count = 0;
    this.data = {};

    // Push
    this.push = function(element){
        this.data[this.count] = element;
        this.count++;
    }
    // Pop
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        delete this.data[this.count];
        return this.data;
    }
    // Current top element
    this.top = function(){
        return this.data[this.count - 1];
    }
    // size of the data
    this.size = function(){
        return this.count;
    }
}