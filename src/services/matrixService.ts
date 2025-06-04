export const divideByPercentage = ( percentages:number[] , total:number): number[] => {
    const rawValues:number[] = percentages.map(p=>(p/100)*total); //Chuyển từ phần trăm sang số thập phân
    const floodedValue:number[] = rawValues.map(Math.floor)
    const remainValue:number[] = rawValues.map((val,i)=>val - Math.floor(val))
    const dividedTotal:number = floodedValue.reduce((a,b)=>a+b,0);
    let remain:number = total - dividedTotal;
    while(remain>0){
        let maxIndex = remainValue.indexOf(Math.max(...remainValue))
        floodedValue[maxIndex]++;
        remainValue[maxIndex] = 0
        remain--;
    }
    return floodedValue;
}