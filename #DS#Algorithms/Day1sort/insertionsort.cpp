#include<iostream>
using namespace std;

//https://www.programiz.com/dsa/insertion-sort insertion sort notes

void insertionSort(int arr[], int N){
    for(int i=1; i<N; i++){
        int ele = arr[i];
        int j = i-1;
        while(j>=0 && ele<arr[j]){
            arr[j+1] = arr[j]; 
            j--;
        }
        arr[j+1] = ele;
    }
}


int main()
{
    int arr[] = {5,2,78,333,1};

    insertionSort(arr, 5);

    for(int i=0; i<5; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}