#include<iostream>
using namespace std;

//https://www.programiz.com/dsa/quick-sort notesof quicksort

void swap(int*a, int*b){
    int temp =*a;
    *a = *b;
    *b=temp;
}
void display(int arr[], int size){
    for(int i=0; i<size; i++){
        cout<<arr[i]<<" ";
    }
}

int partition(int arr[], int low, int high){
    int pivot = arr[high];

    int i = low-1;

    for(int j=low; j<high;j++){
        if(arr[j]<=pivot){
            i++;
            swap(&arr[i], &arr[j]);
        }
    }

    swap(&arr[i+1],&arr[high]);

    return(i+1);
}

void quicksort(int arr[], int low, int high){
    if(low<high){

        int p = partition(arr,low,high);

        quicksort(arr,low,p-1);
        quicksort(arr,p+1,high);
    }

}


int main()
{

    int arr[] = {2,4,56,1,0,46,7};
    int size = sizeof(arr)/sizeof(arr[0]);

    cout<<"The array before sorting is : "<<endl;
    display(arr,size);

    quicksort(arr,0,size-1);

    cout<<endl<<"The array after sorting is : "<<endl;
    display(arr,size);
    return 0;
}