function utopianTree(n) {
    // Write your code here
    
    let height = 1;
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
         height = height + 1;    
        }
        if (i % 2 !== 0) {
         height = height * 2;    
        }
    }
    return height;

}
//https://www.hackerrank.com/challenges/utopian-tree