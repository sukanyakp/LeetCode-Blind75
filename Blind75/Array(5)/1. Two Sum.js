var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i];       
        if (map.has(num)) {
            return [map.get(num), i];     
        } else {
            map.set(nums[i], i);          // store current number and its index
        }
    }
};

console.log(twoSum([2,7,11,15],9)); 
