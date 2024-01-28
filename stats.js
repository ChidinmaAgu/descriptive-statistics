class DescriptiveStats {

    constructor (data) {
      this.data = data.sort((a,b)=> a -b);
    }
  
    //Mean
      calcMean() {
         const sum = this.data.reduce((acc, value) => acc + value, 0);
          return sum/this.data.length;
      }
  
      //Median
        calcMedian() {
           const middleIndex = Math.floor(this.data.length / 2);
  
            if (this.data.length % 2 === 0) {
              return (this.data[middleIndex -1] + this.data[middleIndex])
            } else {
               return this.data[middleIndex];
            }
        }
  
        //Mode
           calcMode() {
             const frequencyInt = {};
             this.data.forEach(value => {
               frequencyInt[value] = (frequencyInt[value] || 0) + 1
             });
  
             let mode;
             let maximumFrequency = 0
  
             for (const value in frequencyInt) {
              if(frequencyInt[value] > maximumFrequency) {
                mode = Number(value);
                maximumFrequency = frequencyInt[value];
              }
             }
  
             return mode;
           }
  
           //Range.
              calcRange() {
                return this.data[this.data.length - 1] - this.data[0];
              }
  
              //Variance 
              calcVariance() {
                 const mean = this.calcMean();
                 const differences = this.data.map((value)=> Math.pow(value - mean, 2));
                 const sumSquaredDiff = differences .reduce((acc, value) => acc + value,0);
                  return sumSquaredDiff / this.data.length;
                }
  
                //Standard deviation
                 calcStandardDeviation() {
                  return Math.sqrt(this.calcVariance());
                 }
  
                 //Quartiles
                  calcQuartiles() {
                    const middleIndex = Math.floor(this.data.length / 2);
  
                    const lowerPart = this.data.slice(0,middleIndex);
                    const upperPart = this.data.slice(0,lowerPart);
  
                    const lowerQuart = this.calcMedian(lowerPart);
                    const upperQuart = this.calcMedian(upperPart);
  
                    return {
                      lowerQuart,
                      median : this.calcMedian(),
                      upperQuart,
                    };
                  }
  
                  //Interquartile Range
                   calcInterquartileRange() {
                     const quartiles = this.calcQuartiles();
                     return quartiles.upperQuart - quartiles.lowerQuart;
                   }
  
                  }
  
                  //Examples 
                  const data = [5,3,1,9,5,8,6,4,7,2];
                  const stats = new DescriptiveStats(data);
  
                  
                   console.log("Mean", stats.calcMean());
                    console.log("Median:",stats.calcMedian() );
                  console.log("Mode:",stats.calcMode() );
                   console.log("Range:", stats.calcRange());
                    console.log("Varaiance:", stats.calcVariance());
                    console.log("Standard_Deviation:", stats.calcStandardDeviation());
  
                    const quartiles = stats.calcQuartiles();
                    console.log("Lower quart:", quartiles.lowerQuart);
                   console.log("Median (Q2):", quartiles.median);
                   console.log("Upper Quart:", quartiles.upperQuart);
  
                   console.log("Interquartile Range:", stats.calcInterquartileRange());
  
  
                  
  
  
  
  