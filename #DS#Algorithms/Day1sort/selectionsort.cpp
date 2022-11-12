#include<iostream>
using namespace std;

//https://www.programiz.com/dsa/selection-sort notes of selectionsort

void selectionSort(int arr[], int N){
    for(int i=0; i<N-1; i++){
        int min_index = i;
        for(int j=i+1; j<N;  j++){
            if(arr[j]<arr[min_index]){
                int temp = arr[j];
                arr[j]=arr[min_index];
                arr[min_index] = temp;
            }
        }
}
}

int main()
{
    int arr[]={45,1,8,90,4,3};

    selectionSort(arr,6);

    for(int i=0; i<6; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}