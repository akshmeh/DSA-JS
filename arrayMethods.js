// Array Methods

/*
1. insertionLastPosition
2. insertionAtPosition
3. deletionLastPosition
4. deletionAtPosition
5. traversal
6. size
7. merge
*/

/*
Linear Search Algorithm

1. searchByIndex
2. searchByElement
*/

export class arrayMethods {
    constructor() {
        this.arr = [];
        this.count = 0;

        // Array InsertionLastPosition
        this.insertionLastPosition = (element) => {
            if (!element)
                return "Error: Pass the element through parameter!";
            this.arr[this.count] = element;
            this.count++;
            return `Success: Element ${element} inserted into the array at the last position`;
        };

        // Array InsertionAtPosition
        this.insertionAtPosition = (indexVal, newElement) => {
            if (!indexVal)
                return "Error: Pass the index of the element through parameter!";
            if (!newElement)
                return "Error: Pass the New Element of the element through parameter!";
            for (let index = this.count - 1; index >= 0; index--) {
                if (index >= indexVal)
                    this.arr[index + 1] = this.arr[index];
                if (index == indexVal)
                    this.arr[indexVal] = newElement;
            }
            if (this.arr[indexVal] == newElement)
                this.count++;
            return `Success: Element ${newElement}  inserted into the array at the ${indexVal} position`;
        };

        // Array DeletionLastPosition
        this.deleteionLastPosition = () => {
            var tempElement = this.arr[this.count - 1];
            this.arr.length = this.count - 1;
            this.count--;
            return `Success: Element ${tempElement} deleted from the array at the last position`;
        };
        // Array DeletionAtPosition
        this.deletionAtPosition = (index) => {
            var tempElement = this.arr[index];
            if (!index)
                return "Error: Pass the index of the element through parameter!";
            for (let indexTemp = index; indexTemp < this.arr.length; indexTemp++) {
                this.arr[indexTemp] = this.arr[indexTemp + 1];
            }
            if (this.arr[this.count - 1] == undefined)
                this.arr.length = this.count - 1;

            this.count--;
            return `Success: Element ${tempElement} deleted from the array at the ${index} position`;

        };

        // Array Traversal
        this.traversal = () => {
            if (this.count == 0)
                return "Message: Array is empty!";
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                console.log(`Index: ${index} - Value: ${element}`);
            }
        };

        // Array Size
        this.size = () => {
            return `Success: Size of the array is: ${this.count}`;
        };

        // Array Merge
        this.merge = (secondArray) => {
            if (!secondArray && typeof (secondArray) == "object")
                return "Error: Pass the array of the elements through parameter!";
            for (let index = 0; index < secondArray.length; index++) {
                this.insertionLastPosition(secondArray[index]);
            }
            return `Sucess: Array merged!`;
        };

        // Array searchByIndex
        this.searchByIndex = (index) => {
            if (!index)
                return "Error: Pass the index of the element through parameter!";
            return `Success: Element ${this.arr[index]} is on this index: ${index}`;
        };

        // Array searchByElement
        this.searchByElement = (element) => {
            if (!element)
                return "Error: Pass the element of the element through parameter!";
            var indexTemp = undefined;
            for (let index = 0; index < this.arr.length; index++) {
                if (this.arr[index] === element)
                    indexTemp = index;
            }
            return (indexTemp !== undefined) ? `Success: The array has Element ${element} on the index: ${indexTemp} ` : `Message: Element ${element} is not exist in the array`;
        };
    }
}
