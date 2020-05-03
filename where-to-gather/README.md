# Where to Gather
Your family members live all around the world, and you're all planning to get together for the holidays!

You'd like to find the least costly way to congregate at one location, so you're trying to decide who should be the host. You're given an adjacency matrix travelCosts, where travelCosts[i][j] represents the cost for family member i to visit family member j. If it's not possible for i to visit j, then travelCosts[i][j] will be equal to -1.

Your task is to find the minimum total cost for everyone to get together (or return -1 if it's not possible).

#### Note:
All travel is direct; we won't consider any layovers or transfers.
If travelCosts[i][j] = -1 then i won't be able to visit j, even if there's another index k available such that travelCosts[i][k] ≠ -1 and travelCosts[k][j] ≠ -1.

### Example
For `travelCost = [[ 0, 5, 0], [-1, 0, 12], [ 0, 2, 0]]` the output should be `7`.

### Source
[CodeSignal](https://app.codesignal.com/)
