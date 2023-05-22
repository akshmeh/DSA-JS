var Stack = function(){
    this.count = 0;
    this.data = {};

    // Push
    this.push = function(element){
        if(!element){
            return "Pass the elemnt throgh parameters";
        }
        this.data[this.count] = element;
        this.count++;
        return `${element} pushed`
    }
    // Pop
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        var lastElement = this.data[this.count];
        delete this.data[this.count];
        return `${lastElement} poped`;
    }
    // Current top element
    this.top = function(){
        return `Top level Element: ${this.data[this.count - 1]}`;
    }
    // size of the data
    this.size = function(){
        return `Length of the data: ${this.count}`;
    }
}