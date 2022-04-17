int introTutorial(int V, vector<int> arr) {
    for(int i = 0; i < arr.size(); i++) {
        if (V == arr[i]) {
            return i;
        }
    }
    return 0;
}
