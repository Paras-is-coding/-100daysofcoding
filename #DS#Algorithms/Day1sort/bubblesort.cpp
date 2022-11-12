#include<iostream>
using namespace std;

//https://www.programiz.com/dsa/bubble-sort  bubble sort notes

void bubbleSort(int arr[] , int N){
    for(int i=0;i<N-1;i++){
        for(int j=0; j<N-i-1; j++){
            if(arr[j]>arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

int main()
{
    int arr[] = {8,4,7,9,2,1};
    bubbleSort(arr,6);

    for(int i=0; i<6; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}