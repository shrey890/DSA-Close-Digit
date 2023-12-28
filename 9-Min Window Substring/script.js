console.time()
function minWindow(s, t) {
    if (!s || !t) return "";
    const tCount = {};
    for (const char of t) tCount[char] = (tCount[char] || 0) + 1;
    let required = Object.values(tCount).length;
    let left = 0, right = 0;
    let formed = 0;
    let minWindow = "";
    let minLength = Infinity;
    while (right < s.length) {
        const char = s[right];
        tCount[char] = (tCount[char] || 0) - 1;
        if (tCount[char] >= 0) formed++;
        while (formed === required && left <= right) {
            const currentWindow = s.substring(left, right + 1);
            if (currentWindow.length < minLength) {
                minWindow = currentWindow;
                minLength = currentWindow.length;
            }
            const leftChar = s[left];
            tCount[leftChar] = (tCount[leftChar] || 0) + 1;
            if (tCount[leftChar] > 0) formed--;
            left++;
        }
        right++;
    }
    return minWindow;
}
const s = "ADOBECODEBANC";
const t = "ABC";
const minWindowSubstring = minWindow(s, t);
console.log(minWindowSubstring);
console.timeEnd()
