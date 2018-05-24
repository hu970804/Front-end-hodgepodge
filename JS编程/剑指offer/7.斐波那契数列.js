/* 
    大家都知道斐波那契数列， 现在要求输入一个整数n， 请你输出斐波那契数列的第n项。
    n <= 39
*/

function Fibonacci(n) {
    // write code here
    if(n < 1) {
        return n
    }

    let arr = [1, 1]
    for(let i = 1;i < n -1; i++) {
        arr.push(arr[i] + arr[i-1])
    }
    return arr[n - 1]
}

