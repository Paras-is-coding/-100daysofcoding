#include<iostream>
using namespace std;

//soo there are two parts of merge sort one is merging two sorted arrays and another recursive mergesort where we break array until there's one element 

void merge(int a[],int mid,int low,int high){
    int i,j,k;
    int b[high-low];
    i=low;j=mid+1;
    k=low;

    while(i<=mid && j<=high){
        if(a[i]<a[j]){
            b[k]=a[i];
            k++;
            i++;
        }
        else{
            b[k]=a[j];
            k++;
            j++;
        }
    }

    while(i<=mid){
        b[k]=a[i];
        k++;
        i++;
    }
    while(j<=high){
        b[k]=a[j];
        k++;
        j++;
    }


    for(k=low; k<=high;k++){
        a[k] = b[k];
    }
}

void mergeSort(int x[],int low, int high){
    if(low<high){
        int mid = (low+high)/2;
        mergeSort(x,low,mid);
        mergeSort(x,mid+1,high);
        merge(x,mid,low,high);
    }
}
int main()
{
    int arr[] ={66,7,40,3,222};
    mergeSort(arr,0,4);
    for(int i=0; i<5;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}