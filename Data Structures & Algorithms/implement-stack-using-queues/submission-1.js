class MyStack {
    constructor() {
        this.q1 = []; 
        this.q2 = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        //when we are putting it what we ll do 
        // we ll use the helper queue to store the pushed elm i.e x and 
        // and then we ll push other elements of the other queue behind it 

        this.q2.push(x) ;
        while (this.q1.length > 0 ){
            let temp = this.q1.shift() ; 
            this.q2.push(temp)
        }
        [this.q1 , this.q2] = [this.q2 , this.q1] ; 
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q1.shift() ; 
    }

    /**
     * @return {number}
     */
    top() {
        return this.q1[0] ; 
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.length === 0 ; 
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
