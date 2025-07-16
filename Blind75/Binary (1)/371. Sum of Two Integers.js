var getSum = function(a, b) {
    while (b !== 0) {
        let carry = a & b;      
        a = a ^ b;              
        b = carry << 1;         
    }
    return a;
};




// some basics related with this ;

// XOR (^) → This gives you the sum without carry.
// AND (&) and Shift (<<) → This gives you the carry, which you need to add in the next iteration.


// a = 5 = 0101
// b = 3 = 0011

// Sum (no carry): 0101 ^ 0011 = 0110 (6)
// Carry:          0101 & 0011 = 0001 -> 0001 << 1 = 0010 (2)

// Now a = 6, b = 2
// Sum: 0110 ^ 0010 = 0100 (4)
// Carry: 0110 & 0010 = 0010 << 1 = 0100 (4)

// Now a = 4, b = 4
// Sum: 0100 ^ 0100 = 0000
// Carry: 0100 & 0100 = 0100 << 1 = 1000 (8)

// a = 0, b = 8
// Sum: 0000 ^ 1000 = 1000
// Carry = 0000 & 1000 = 0000

// Final answer = 8


