function partitionLabels(text) {
    const lastIndices = new Map();
    for (let i = 0; i < text.length; i++) {
        lastIndices.set(text[i], i);
    }
    const partition = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < text.length; i++) {
        end = Math.max(end, lastIndices.get(text[i]));
        if (i === end) {
            partition.push(end - start + 1);
            start = end + 1;
        }
    }
    return partition;
}
const text = "abacbd";
const result = partitionLabels(text);
console.log(result);
