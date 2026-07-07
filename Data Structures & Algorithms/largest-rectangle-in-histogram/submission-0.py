class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        heights.append(0)
        stack = []
        maxArea = 0 

        for i in range(len(heights)) : 
            while stack and heights[stack[-1]] > heights[i] : 
                height = heights[stack.pop()]
                left = stack[-1] if stack else -1 
                right = i 
                width = right - left -1 
                area = height * width 
                maxArea = max(maxArea , area)
            stack.append(i)
        return maxArea