var containsDuplicate = function(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
};

const nums = [1,2,3,4]
console.log(containsDuplicate(nums));
