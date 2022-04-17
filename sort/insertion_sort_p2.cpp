void insertionSort2(int n, vector<int> arr) {
    for(int i = 0; i < n; i++) {
        int j = i;
        while (arr[j-1] > arr[j] and j  > 0) {
            int aux = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = aux;
            
            j -= 1;
        }

        if (i != 0) {
            for(int k = 0; k < n; k++) {
                cout << arr[k] << " ";
                if (k == n-1) {
                    cout << "\n";
            }
          }   
        }
    }
  
