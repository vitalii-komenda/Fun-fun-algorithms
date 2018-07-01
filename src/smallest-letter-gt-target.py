def nextGreatestLetter(letters, target):
    """
    :type letters: List[str]
    :type target: str
    :rtype: str
    """
    if len(letters) == 0:
        return -1

    left, right = 0, len(letters) - 1
    while left +1 < right:
        mid = (left + right) // 2
        if letters[mid] <= target:
            left = mid
        else:
            right = mid

    if target >= letters[len(letters)-1]:
        return letters[0]
    if target >= letters[left] and target < letters[right]:
        return letters[right]
    else:
        return letters[left]
        
// nextGreatestLetter(["c", "f", "j"], "a") -> "c"
