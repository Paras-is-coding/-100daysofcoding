#include<iostream>
using namespace std;

int binarysearch(int arr[] ,int low,int high, int element){
    if(low<=high){
        int middle = (low+high)/2;
        if(arr[middle] == element){
            return middle;
        }
        else if(element <arr[middle]){
            binarysearch(arr,low,middle-1,element);
        }
        else{
            binarysearch(arr,middle+1,high,element);
        }
    }
    return -1;
}
int main()
{
    
    int arr[]= { 1,4,6,8,55,90};
    int n = sizeof(arr)/sizeof(arr[0]);
    int i = binarysearch(arr,0,n-1,6);

    if(i==-1){
        cout<<"The element is not found in the array.";
    }
    else{
        cout<<"The element is found at index "<<i<<".";
    }
    return 0;
}