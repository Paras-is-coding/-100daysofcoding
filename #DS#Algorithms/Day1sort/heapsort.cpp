#include<iostream>
using namespace std;

//https://www.programiz.com/dsa/heap-sort heapsort notes

void heapify(int arr[], int N, int i){
    int largest = i;
    int left = 2*i+1;
    int right = 2*i+2;

    if(left<N && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<N && arr[right]>arr[largest]){
        largest = right;
    }

    if(largest != i){
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest]= temp;
        heapify(arr,N,largest);//note here heapify largest here**

    }

}

void heapSort(int arr[], int N){
    //heapify all non leaf nodes
    for(int i=N/2 -1; i>=0; i--){
        heapify(arr,N,i);
    }

    //sorting by putting largest to end and heapify root
    for(int i=N-1; i>=0;i--){
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr,i,0);//note here heapify upto i only*
    }
}
int main()
{

    int arr[] = {56,1,8,0,222,5,9};
    heapSort(arr,7);

    for(int i=0; i<7; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}