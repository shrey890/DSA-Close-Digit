function k_smallest_pairs(nums1, nums2, k) {
    const result = []
    const heap = []
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        heap.push({ val: nums1[i] + nums2[0], i, j: 0 })
    }
    while (k-- > 0 && heap.length > 0) {
        const { val, i, j } = heap.shift()
        result.push([nums1[i], nums2[j]])
        if (j + 1 < nums2.length) {
            heap.push({ val: nums1[i] + nums2[j + 1], i, j: j + 1 })
            heap.sort((a, b) => a.val - b.val)
        }
    }
    return result
}
const nums1 = [1, 7, 11]
const nums2 = [2, 4, 6]
const k = 3
const smallest_pairs = k_smallest_pairs(nums1, nums2, k)
console.log(smallest_pairs)